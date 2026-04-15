const postModel = require("../models/post.model")
const ImageKit = require("@imagekit/nodejs")
const {toFile} = require("@imagekit/nodejs")
const { request } = require("express")
const jwt = require("jsonwebtoken")
// const cookies = require("cookie-parser")

const imagekit = ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req, res) {
    
    const token = req.cookies.token
    
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access"
        })
    }

    let decoded = null;
    
    try {
         decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch(e) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }


    // console.log(decoded)

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer),'file'),
        fileName: "Test",
        folder:"Cohort-2-insta-clone"
    })
    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user:decoded.id
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })
}

module.exports = {createPostController}