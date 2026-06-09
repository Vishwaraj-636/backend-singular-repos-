// const blacklistModel = require("../models/blacklist.model");
const userModel = require("../models/user.model")
// const redis = require("../config/cache")
const jwt = require("jsonwebtoken")

async function authUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "unauthorized"
    })
  }

  // const isTokenBlackListed = await redis.get(token)

  // if (isTokenBlackListed) {
  //   return res.status(401).json({
  //     message: "invalid token"
  //   })
  // }

  

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
    )
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({
      message: "invalid token"
    })
  }
}

module.exports = {
  authUser
}