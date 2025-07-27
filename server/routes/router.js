const express = require("express");
const taskRouter = require("./task.api");
const userRouter = require("./user.api");

const router = express.Router();

router.use("/tasks", taskRouter);
router.use("/users", userRouter);

module.exports = router;
