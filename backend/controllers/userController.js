const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

// Load all users with pagination
exports.allUsers = async (req, res, next) => {
  // Enable pagination
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const count = await User.find({}).estimatedDocumentCount();

  try {
    // Fetch users sorted by creation date, excluding passwords
    const users = await User.find()
      .sort({ createdAt: -1 })
      .select("-password")
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    // Respond with paginated user data
    res.status(200).json({
      success: true,
      users,
      page,
      pages: Math.ceil(count / pageSize),
      count,
    });
    next();
  } catch (error) {
    return next(error);
  }
};

// Show a single user
exports.singleUser = async (req, res, next) => {
  try {
    // Fetch a user by their ID
    const user = await User.findById(req.params.id);

    // Respond with the user data
    res.status(200).json({
      success: true,
      user,
    });
    next();
  } catch (error) {
    return next(error);
  }
};

// Edit user information
exports.editUser = async (req, res, next) => {
  try {
    // Update a user's information by their ID
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // Respond with the updated user data
    res.status(200).json({
      success: true,
      user,
    });
    next();
  } catch (error) {
    return next(error);
  }
};

// Delete a user
exports.deleteUser = async (req, res, next) => {
  try {
    // Delete a user by their ID
    const user = await User.findByIdAndDelete(req.params.id);

    // Respond with success message
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
    next();
  } catch (error) {
    return next(error);
  }
};

// Record job history for a user
exports.createUserJobsHistory = async (req, res, next) => {
  const { title, description, salary, location } = req.body;

  try {
    // Find the current user
    const currentUser = await User.findOne({ _id: req.user._id });

    // Check if the user is logged in
    if (!currentUser) {
      return next(new ErrorResponse("You must be logged in", 401));
    } else {
      // Create a job history entry and add it to the user's record
      const addJobHistory = {
        title,
        description,
        salary,
        location,
        user: req.user._id,
      };
      currentUser.jobsHistory.push(addJobHistory);
      await currentUser.save();
    }

    // Respond with success message and updated user data
    res.status(200).json({
      success: true,
      currentUser,
    });
    next();
  } catch (error) {
    return next(error);
  }
};
