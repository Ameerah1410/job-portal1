const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

// User registration/signup
exports.signup = async (req, res, next) => {
  const { email } = req.body;

  // Check if the email is already registered
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new ErrorResponse("E-mail already registered", 400));
  }

  try {
    // Create a new user
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// User login/signin
exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email) {
      return next(new ErrorResponse("Please add an email", 403));
    }
    if (!password) {
      return next(new ErrorResponse("Please add a password", 403));
    }

    // Check if the user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 400));
    }

    // Check if the provided password matches the user's password
    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return next(new ErrorResponse("Invalid credentials", 400));
    }

    // Send the JWT token in the response
    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

// Function to send JWT token in the response
const sendTokenResponse = async (user, codeStatus, res) => {
  const token = await user.getJwtToken();
  res
    .status(codeStatus)
    .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
    .json({
      success: true,
      role: user.role,
    });
};

// User logout
exports.logout = (req, res, next) => {
  // Clear the JWT token cookie
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};

// Fetch user profile
exports.userProfile = async (req, res, next) => {
  // Retrieve user information by ID, excluding the password
  const user = await User.findById(req.user.id).select("-password");

  // Respond with user profile data
  res.status(200).json({
    success: true,
    user,
  });
};
