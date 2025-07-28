const express = require("express");
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

const authRouter = express.Router();

authRouter.post("/login", authController.login, userController.getUser);

module.exports = authRouter;
