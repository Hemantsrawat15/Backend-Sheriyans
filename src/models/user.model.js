const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        // Every user should have a unique email adress
    },
    password: String,
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;