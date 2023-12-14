require("dotenv").config();
const express = require("express");
const app = express();

const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const cookieSession = require("cookie-session");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const jobTypeRoutes = require("./routes/jobTypeRoutes");
const jobsRoutes = require("./routes/jobsRoutes");

const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

const PORT = process.env.PORT || 5000;

// Middleware and security-related setups
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// Application routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", jobTypeRoutes);
app.use("/api", jobsRoutes);

// Error handling middleware
app.use(errorHandler);

// MongoDB connection setup
const connection_string =
  "mongodb+srv://Ameerah14:Basic1012@hyperiondevtasks.y7esotx.mongodb.net/JobPortal";

mongoose.connect(connection_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
