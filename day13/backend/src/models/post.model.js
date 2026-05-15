const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default:""
    },
    imgUrl: {
        type: String,
        required:[true,"imgUrl is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // <-- This must perfectly match your user model name
        required: [true, "userId is required"]
    }
})


const postModel = mongoose.model("posts", postSchema)
module.exports = postModel