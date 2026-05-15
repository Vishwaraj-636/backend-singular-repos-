const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function loginController(req, res) {
    const { email, username, password } = req.body

    const user = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    }).select("+password") 

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "invalid credentials"
        })
    }

    const token = jwt.sign({
        id: user._id,
        username:user.username
    }, process.env.JWT_SECRET, { expiresIn: "1d" })

    res.cookie("token", token)
    res.status(200).json({
        message: "login successful",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}

async function registerController(req, res){
    const { email, username, password, bio, profileImage } = req.body

   
    const isUserExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserExist) {
        return res.status(409).json({
            message: "user already exist" + (isUserExist.email == email ? " with this email" : "with this username")
        })
    }

    const hash = await bcrypt.hash(password, 10)
    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password: hash
    })

    const token = jwt.sign({
        id: user._id,username:user.username
    }, process.env.JWT_SECRET, { expiresIn: "1d" })

    res.cookie("token", token)

    res.status(201).json({
        message: "user created successfully",
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage

        }
    })
}

async function getMeController(req,res) {
    const userId = req.user.id
    const user = await userModel.findById(userId)
    
    res.status(200).json({
        user: {
            username: user.username,
            email: user.email,
            bio:user.bio,
            profileImage: user.profileImage
        }
    })
}

module.exports = {
    registerController,
    loginController,
    getMeController
}