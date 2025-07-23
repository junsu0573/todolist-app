const express = require("express");
const taskRouter = require("./task.api");

const router = express.Router();

router.use("/tasks", taskRouter);

module.exports = router;
