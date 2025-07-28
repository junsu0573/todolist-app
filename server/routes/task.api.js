const express = require("express");
const taskController = require("../controllers/task.controller");
const authController = require("../controllers/auth.controller");

const taskRouter = express.Router();

taskRouter.post("/", authController.login, taskController.createTask);

taskRouter.get("/", taskController.getAllTasks);

taskRouter.put("/:id", taskController.updateTask);

taskRouter.delete("/:id", taskController.deleteTask);

module.exports = taskRouter;
