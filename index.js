const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const helmet = require("helmet");
const AuthRoute = require("./routes/auth");
const DonateRoute = require("./routes/donors");
const UserRoute = require("./routes/users");

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => console.log(err));

// Middlewares
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRoute);
app.use("/api/requests", DonateRoute);
app.use("/api/users", UserRoute);

// Running our backend server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Backend server is running at port ${PORT}`);
});
