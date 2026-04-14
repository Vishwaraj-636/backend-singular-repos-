const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


async function loginController(req, res) {
    const { email, username, password } = req.body

    const user = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")
    const isPasswordValid = hash === user.password

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "invalid credentials"
        })
    }

    const token = jwt.sign({
        id: user._id
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

    // const isUserExistByEmail = await userModel.findOne({ email })
    // if (isUserExistByEmail) {
    //     return res.status(409).json({
    //         message:"user with this email already exist"
    //     })
    // }

    // const isUserExistByUsername = await userModel.findOne({ username })
    // if (isUserExistByUsername) {
    //     return res.status(409).json({
    //         message:"user with this username already exist"
    //     })
    // }

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

    const hash = crypto.createHash("sha256").update(password).digest("hex")

    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password: hash
    })

    const token = jwt.sign({
        id: user._id,
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

module.exports = {
    registerController,
    loginController
}