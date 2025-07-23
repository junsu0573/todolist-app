const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const cors = require("cors");

const app = express();
const mongoUrl = "mongodb://localhost:27017/todo-app";

app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);

app.listen(3000, async () => {
  await mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
  console.log("Server is running on port 3000");
});
