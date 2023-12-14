const ErrorResponse = require("../utils/errorResponse");

// Custom error handler middleware
const errorHandler = (err, req, res, next) => {
  // Create a copy of the error object
  let error = { ...err };
  error.message = err.message;

  // Handle CastError (Mongoose): Invalid ObjectId
  if (err.name === "CastError") {
    const message = `Resource not found ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Handle Mongoose duplicate key error
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  // Handle Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => " " + val.message);
    error = new ErrorResponse(message, 400);
  }

  // Respond with the appropriate HTTP status code and error message
  res.status(error.codeStatus || 500).json({
    success: false,
    error: error.message || "Server error",
  });
};

module.exports = errorHandler;
