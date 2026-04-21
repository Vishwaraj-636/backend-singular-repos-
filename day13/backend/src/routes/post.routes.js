const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middleware")

/* 
POST /api/posts/
*/

postRouter.post("/", upload.single("image"), identifyUser, postController.createPostController)

/* 
GET /api/posts/
*/
postRouter.get("/", identifyUser, postController.getPostController)

/* 
/api/posts/details/:postid
return details abt specific post with the id and check whether the post belongs to the user that is requesting 
*/
postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)

/* 
@routes /api/posts/like/:postid
@desc like a post
*/
postRouter.post("/like/:postId", identifyUser, postController.likePostController)


module.exports = postRouter