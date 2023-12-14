const Job = require("../models/jobModel");
const JobType = require("../models/jobTypeModel");
const ErrorResponse = require("../utils/errorResponse");

// Create a new job
exports.createJob = async (req, res, next) => {
  try {
    // Create a job using data from the request body and the user ID
    const job = await Job.create({
      title: req.body.title,
      description: req.body.description,
      salary: req.body.salary,
      location: req.body.location,
      jobType: req.body.jobType,
      user: req.user.id,
    });

    // Respond with the created job
    res.status(201).json({
      success: true,
      job,
    });
  } catch (error) {
    // Pass any errors to the error-handling middleware
    next(error);
  }
};

// Retrieve a single job by its ID
exports.singleJob = async (req, res, next) => {
  try {
    // Fetch a job by its ID
    const job = await Job.findById(req.params.id);

    // Respond with the job data
    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    // Pass any errors to the error-handling middleware
    next(error);
  }
};

// Update a job by its ID
exports.updateJob = async (req, res, next) => {
  try {
    // Update a job by its ID using data from the request body
    const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, {
      new: true,
    })
      .populate("jobType", "jobTypeName")
      .populate("user", "firstName lastName");

    // Respond with the updated job data
    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    // Pass any errors to the error-handling middleware
    next(error);
  }
};

// Show all jobs with search, filter, and pagination
exports.showJobs = async (req, res, next) => {
  // Enable search
  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  // Fetch all job categories to filter jobs by category IDs
  let ids = [];
  const jobTypeCategory = await JobType.find({}, { _id: 1 });
  jobTypeCategory.forEach((cat) => {
    ids.push(cat._id);
  });

  // Filter jobs by category IDs
  let cat = req.query.cat;
  let categ = cat !== "" ? cat : ids;

  // Fetch all unique job locations
  let locations = [];
  const jobByLocation = await Job.find({}, { location: 1 });
  jobByLocation.forEach((val) => {
    locations.push(val.location);
  });
  let setUniqueLocation = [...new Set(locations)];
  let location = req.query.location;
  let locationFilter = location !== "" ? location : setUniqueLocation;

  // Enable pagination
  const pageSize = 5;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Job.find({
    ...keyword,
    jobType: categ,
    location: locationFilter,
  }).countDocuments();

  try {
    // Fetch jobs based on search, category, location, and pagination parameters
    const jobs = await Job.find({
      ...keyword,
      jobType: categ,
      location: locationFilter,
    })
      .sort({ createdAt: -1 })
      .populate("jobType", "jobTypeName")
      .populate("user", "firstName")
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    // Respond with the list of jobs
    res.status(200).json({
      success: true,
      jobs,
      page,
      pages: Math.ceil(count / pageSize),
      count,
      setUniqueLocation,
    });
  } catch (error) {
    // Pass any errors to the error-handling middleware
    next(error);
  }
};

// Delete a job by its ID
exports.deleteJob = async (req, res, next) => {
  try {
    // Fetch a job by its ID
    const job = await Job.findById(req.params.id);

    // Check if the job exists
    if (!job) {
      return next(new ErrorResponse("Job not found", 404));
    }

    // Delete the job
    await job.deleteOne();

    // Respond with success message
    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    // Pass any errors to the error-handling middleware
    next(error);
  }
};
