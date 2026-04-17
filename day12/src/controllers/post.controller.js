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

async function getPostController(req,res) {
    const token = req.cookies.token
    let decoded = null
    try {
         decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return res.status(401).json({

        })
    }

    const user = decoded.id
    const posts = await postModel.find({
        user:user
    })
    res.status(200).json({
        message: "post fetched succesfully",
        posts                
    })
}

async function getPostDetailsController(req, res) {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "unauthorized access"
        })
    }
    let decoded = null
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return res.status(401).json({
            message: "invalid token"
        })
    }

    const userId = decoded.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)
    if (!post) {
        return res.status(404).json({
            message:"post not found"
        })
    }
    
    const isValidUser = post.user.toString() === userId
    if (!isValidUser) {    
        return res.status(403).json({
            message:"forbidden credentials"
        })
    }

    res.status(200).json({
        message:"post fetched successfully",
        post
    })
}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController
}