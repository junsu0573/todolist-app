const express = require("express");
const taskController = require("../controllers/task.controller");

const taskRouter = express.Router();

taskRouter.post("/", taskController.createTask);

taskRouter.get("/", taskController.getAllTasks);

taskRouter.put("/:id", taskController.updateTask);

taskRouter.delete("/:id", taskController.deleteTask);

module.exports = taskRouter;
