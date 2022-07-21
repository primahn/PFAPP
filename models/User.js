// Import mongoose
const mongoose = require("mongoose");

// Create user model
const UserModel = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      max: 30,
      min: 4,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      max: 30,
      min: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Export this model for import in the routes that will need to use it
module.exports = mongoose.model("User", UserModel);
