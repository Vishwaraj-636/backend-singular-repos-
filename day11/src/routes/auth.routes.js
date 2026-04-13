const express = require("express")
const authRouter = express.Router()
const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const { request } = require("http")
/* 
/api/auth/ is the prefix for all routhing
*/

authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body

    const isUserExist = await userModel.findOne({ email })

    if (isUserExist) {
        return res.status(409).json({
            message: "user already exists"
        })
    }

    const user = await userModel.create({
        name, email, password: crypto.createHash("sha256").update(password).digest("hex")
    })

    const token = jwt.sign({
        id: user._id,

    }, process.env.JWT_KEY, { expiresIn: "1h" })

    res.cookie("token", token)
    res.status(201).json({
        message: "user registered successfully",
        token
    })
})

authRouter.get('/get-me', async (req, res) => {
    const token = req.cookies.token
    const decode = jwt.verify(token, process.env.JWT_KEY)
    const user = await userModel.findById(decode.id)

    res.json({
        name: user.name,
        email:user.email,
    })
})

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email })
    if (!user) [
        res.status(404).json({
            message: "user not found"
        })
    ]
    const hash = crypto.createHash("sha256").update(password).digest("hex")
    
    const isPasswordMatch = hash === user.password

    if (!isPasswordMatch) {
        return res.status(401).json({
            message: "invalid credentials"
        })
    }
    res.status(200).json({
        message: "user logged in successfully"
    })
})

module.exports = authRouter
