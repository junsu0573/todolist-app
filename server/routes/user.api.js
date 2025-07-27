const express = require("express");
const userController = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/", userController.createUser);

userRouter.post("/login", userController.loginUser);

// userRouter.get("/", userController.getAllUsers);

// userRouter.put("/:id", userController.updateUser);

// userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
