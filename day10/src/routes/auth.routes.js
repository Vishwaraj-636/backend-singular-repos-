const express = require("express")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const authRouter = express.Router()
const crypto = require("crypto")

// /api/auth/register
authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body

    const isUserExist = await userModel.findOne({ email })

    if (isUserExist) {
        return res.status(400).json({
            message: "user already exist with this email id"
        })
    }
    const hash = crypto.createHash("md5").update(password).digest("hex")
    
    const user = await userModel.create({
        name,email, password:hash
    })



    //JWT token
    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token)

    res.status(201).json({
        message: "user Registered",
        user,
        token
    })
})

///api/auth/protected
authRouter.post("/protected", (req, res) => {
    console.log(req.cookies)
    res.status(200).json({
        message: "This is protected route"
    })

})

//api/auth/login
authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) {
        return res.status(404).json({
            message: "user not found with this email id"
        })
    }

    const isPasswordMatch = user.password === crypto.createHash("md5").update(password).digest("hex")
    if (!isPasswordMatch) {
        return res.status(401).json({
            message: "invalid password"
        })
    }

    const token = jwt.sign(
        {
            id: user._id,
        }, process.env.JWT_SECRET)
    
    res.cookie("jwt_token", token)
    res.status(200).json({
        message: "user logged in",
        user,
    })
})

module.exports = authRouter