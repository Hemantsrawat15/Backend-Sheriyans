const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");


/* 
    User register controller
    POST /api/auth/register
*/


async function userRegisterController(req, res) {
    const { email, name, password } = req.body;

    // Check if user with the email already exists
    const isExists = await userModel.findOne({
        email
    })

    // If a user exists with the same email then return
    if(isExists){
        return res.status(422).json({
            message:"User already exists with email",
            status: "failed"
        })
    }

    // If user doesnt exist already then create a new user
    const user = await userModel.create({
        email,
        name,
        password
    })

    // Assign a jwt token to the user
    const token = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn: "3d"}
    );

    // Store the jwt token in cookies
    res.cookie("token", token);

    // Finally register the user
    res.status(201).json({
        user:{
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })

}

async function userLoginController(req,res){
    const {email, password} = req.body;
    const user = await userModel.findOne({email}).select("+password");

    if(!user){
        return res.status(401).json({
            message: "Email or Password is Invalid",
        })
    }

    const isValidPassword = user.comparePassword(password)

    if(!isValidPassword){
        return res.status(401).json({
            message: "Email or password is Invalid",
        })
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "3d"});

    res.status(200).json({
        user:{
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })
}

module.exports = {
    userRegisterController,
    userLoginController
}