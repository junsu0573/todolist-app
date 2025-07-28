const jwt = require("jsonwebtoken");
require("dotenv").config();

const authController = {};

authController.login = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ status: "error", message: error.message });
  }
};

module.exports = authController;
