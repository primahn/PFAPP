// Import mongoose
const mongoose = require("mongoose");

// Create donor model
const DonorModel = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      max: 30,
      min: 4,
    },
    city: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

// Export this model for import in the routes that will need to use it
module.exports = mongoose.model("Donor", DonorModel);
