const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})


/* 
POST /api/posts/
*/

postRouter.post("/",upload.single("image"), postController.createPostController)

/* 
GET /api/posts/
*/
postRouter.get("/", postController.getPostController)

/* 
/api/posts/details/:postid
return details abt specific post with the id and check whether the post belongs to the user that is requesting 
*/
postRouter.get("/details/:postId", postController.getPostDetailsController) 



module.exports = postRouter