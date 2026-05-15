const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "User name already exist"],
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        unique: [true, "Email already exist"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    bio: String,
    profileImage: {
        type: String,
        default:"https://ik.imagekit.io/b6tn0hyqth/image.png"
    }
})

const userModel = mongoose.model("User", userSchema)
module.exports = userModel