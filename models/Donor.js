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
    },
    age: {
      type: String,
    },
    address: {
      type: String,
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
    },
    tel: {
      type: String,
      unique: true,
    },
    isVaccinated: {
      type: String,
      required: true,
      default: "No",
    },
  },
  { timestamps: true }
);

// Export this model for import in the routes that will need to use it
module.exports = mongoose.model("Donor", DonorModel);
