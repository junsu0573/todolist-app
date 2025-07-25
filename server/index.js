const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const cors = require("cors");
require("dotenv").config();

const app = express();
const mongoUrl = process.env.MONGO_URL;
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);

app.listen(port, async () => {
  await mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).send("OK");
});
