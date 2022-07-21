const router = require("express").Router();
const Donor = require("../models/Donor");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./jsonwebtoken");

// CREATE A DONATION REQUEST*****************************
router.post("/new", verifyToken, async (req, res) => {
  const donor = new Donor({
    fullName: req.body.fullName,
    tel: req.body.tel,
    email: req.body.email,
    bloodGroup: req.body.bloodGroup,
    address: req.body.address,
    city: req.body.city,
    gender: req.body.gender,
  });
  try {
    const savedDonor = await donor.save();
    return res.status(201).json({
      mesage: "Success, donor request sent successfully",
      savedDonor,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE DONOTION REQUEST*****************************
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedDonor = await Donor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Donor updated succesfully", updatedDonor });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// DELETE DONOTION REQUEST*****************************
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Donor.findByIdAndDelete(req.params.id);
    res.status(200).json("Donor has been deleted...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET A DONOTION REQUEST*****************************
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    res.status(200).json(donor);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL DONOTION REQUESTS*****************************
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const donors = query
      ? await Donor.find().sort({ _id: -1 }).limit(5)
      : await Donor.find();
    res.status(200).json(donors);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
