const JobType = require("../models/jobTypeModel");
const ErrorResponse = require("../utils/errorResponse");

// Create a new job category
exports.createJobType = async (req, res, next) => {
  try {
    // Create a job type using data from the request body and the user ID
    const jobT = await JobType.create({
      jobTypeName: req.body.jobTypeName,
      user: req.user.id,
    });

    // Respond with the created job type
    res.status(201).json({
      success: true,
      jobT,
    });
  } catch (error) {
    // Pass any errors to the error-handling middleware
    next(error);
  }
};

// Retrieve all job categories
exports.allJobsType = async (req, res, next) => {
  try {
    // Fetch all job types
    const jobT = await JobType.find();

    // Respond with the list of job types
    res.status(200).json({
      success: true,
      jobT,
    });
  } catch (error) {
    // Pass any errors to the error-handling middleware
    next(error);
  }
};

// Update a job type by its ID
exports.updateJobType = async (req, res, next) => {
  try {
    // Update a job type by its ID using data from the request body
    const jobT = await JobType.findByIdAndUpdate(req.params.type_id, req.body, {
      new: true,
    });

    // Respond with the updated job type
    res.status(200).json({
      success: true,
      jobT,
    });
  } catch (error) {
    // Pass any errors to the error-handling middleware
    next(error);
  }
};

// Delete a job type by its ID
exports.deleteJobType = async (req, res, next) => {
  try {
    // Delete a job type by its ID
    const jobT = await JobType.findByIdAndRemove(req.params.type_id);

    // Respond with success message
    res.status(200).json({
      success: true,
      message: "Job category deleted",
    });
  } catch (error) {
    // If an error occurs, respond with a server error message
    next(new ErrorResponse("Server error occurred", 500));
  }
};
