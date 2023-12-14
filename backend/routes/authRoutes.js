const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logout,
  userProfile,
} = require("../controllers/authController");
const { isAuthenticated } = require("../middleware/auth");

// Authentication routes

// User signup
// Endpoint: /api/signup
router.post("/signup", signup);

// User signin
// Endpoint: /api/signin
router.post("/signin", signin);

// User logout
// Endpoint: /api/logout
router.get("/logout", logout);

// User profile
// Endpoint: /api/me
router.get("/me", isAuthenticated, userProfile);

module.exports = router;
