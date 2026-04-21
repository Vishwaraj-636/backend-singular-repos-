const express = require('express');
const userRouter = express.Router();
const userController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")

userRouter.post("/follow/:username",identifyUser,userController.followUserController)
userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController)

/* add 3 api fo status of follow request- active, pending  */

module.exports = userRouter