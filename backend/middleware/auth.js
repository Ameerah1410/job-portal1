const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Middleware to check if the user is authenticated
exports.isAuthenticated = async (req, res, next) => {
  // Extract the token from the request cookies
  const { token } = req.cookies;

  // Check if the token exists
  if (!token) {
    // If the token is not present, return an error
    return next(new ErrorResponse("Access denied, you must be logged in", 401));
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Retrieve the user information from the decoded token and attach it to the request object
    req.user = await User.findById(decoded.id);

    // Call the next middleware in the chain
    next();
  } catch (error) {
    // If the token is invalid or expired, return an error
    return next(new ErrorResponse("Access denied, you must be logged in", 401));
  }
};

// Middleware to check if the user is an admin
exports.isAdmin = (req, res, next) => {
  // Check if the user's role is not admin (0 for regular user)
  if (req.user.role === 0) {
    // If the user is not an admin, return an error
    return next(new ErrorResponse("Access denied, you must be an admin", 401));
  }

  // Call the next middleware in the chain
  next();
};
