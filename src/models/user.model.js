const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],

        trim: true,
        lowercasE: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please enter a valid email address'
        ],
        unique: [true, "Email already in use"],
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required for creating an account"],
        minlength: [6,"Password should be more than 6 characters"],
        select: false,
    }
},{
    timestamps: true,
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next()
    }
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    return next();
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;