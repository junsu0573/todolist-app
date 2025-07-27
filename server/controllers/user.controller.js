const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userController = {};

// create a user
userController.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (await User.findOne({ email })) {
      return res
        .status(400)
        .json({ status: "error", message: "User already exists" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ status: "success", data: newUser });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

userController.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "User not found" });
    }
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid password" });
    }
    const token = user.generateToken();
    return res.status(200).json({ status: "success", data: { user, token } });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = userController;
