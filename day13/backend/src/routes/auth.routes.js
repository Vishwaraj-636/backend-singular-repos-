const express = require("express")
const authController= require("../controllers/auth.controller")
const authRouter = express.Router()
const identifyUser = require("../middlewares/auth.middleware")

/* 
POST : /api/auth/register
*/
authRouter.post("/register",authController.registerController )

/*
POST : /api/auth/login
*/
authRouter.post("/login",authController.loginController )


authRouter.get("/get-me",identifyUser,authController.getMeController)


module.exports = authRouter