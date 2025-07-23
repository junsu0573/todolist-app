const Task = require("../models/Task");

const taskController = {};

// create a task
taskController.createTask = async (req, res) => {
  try {
    const { task, completed } = req.body;
    const newTask = await Task.create({ task, completed });
    res.status(201).json({ status: "success", data: newTask });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// get all tasks
taskController.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    console.log(tasks);
    res.status(200).json({ status: "success", data: tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

// update a task
taskController.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, { task, completed });
    res.status(200).json({ status: "success", data: updatedTask });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// delete a task
taskController.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ status: "success", message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = taskController;
