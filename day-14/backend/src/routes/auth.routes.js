const { Router } = require("express");
const authController = require("../controller/auth.controller");
const router = Router();
const authMiddleware = require("../middleware/auth.middleware")

router.post("/register", authController.registerUser)
router.post("/login", authController.loginUser)

router.get("/get-me", authMiddleware.authUser, authController.getMe)

router.get("/logout",authController.logoutUser)

module.exports = router;