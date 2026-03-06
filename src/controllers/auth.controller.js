const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser (req,res){
    const {username, email, password} = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        email,
    })

    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"User already exist please log in",
        })
    }

    const user = await userModel.create({
        username, email, password
    })
    
    // jwt.sign() gives us token and ask for two params
    // 1. User kaa data (as an object) jo unique hona chahiye hence we send mongodb id
    // 2. JWT_SECRET
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully",
        user,
        // token
        // We don't send cookie in response rather store them in cookie 
    })

}

module.exports = {
    registerUser,
}