const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter your Name "],
    maxLength: [30, "Name should not exceeed 30 character"],
    minLength: [4, "Name should be more than 4 character"],
  },
  email: {
    type: String,
    required: [true, "please Enter your Email "],
    unique: true,
    validate: [validator.isEmail, "please Enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "please Enter your password "],
    minLength: [8, "password should be greater than 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

moduler.exports = mongoose.model("user", userSchema);
