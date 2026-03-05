const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser (req,res){
    const {username, email, password} = req.body;

    const user = await userModel.create({
        username, email, password
    })

    // jwt.sign() gives us token and ask for two params
    // 1. User kaa data (as an object) jo unique hona chahiye hence we send mongodb id
    // 2. JWT_SECRET
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.status(201).json({
        message: "User registered successfully",
        user,
        token
    })

}

module.exports = {
    registerUser,
}