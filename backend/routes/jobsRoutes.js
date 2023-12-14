const express = require("express");
const router = express.Router();
const {
  createJob,
  singleJob,
  updateJob,
  showJobs,
  deleteJob,
} = require("../controllers/jobsController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

// Job routes

// Create a job (admin access required)
// Endpoint: /api/job/create
router.post("/job/create", isAuthenticated, isAdmin, createJob);

// Get a single job by ID
// Endpoint: /api/job/id
router.get("/job/:id", singleJob);

// Update a job by ID (admin access required)
// Endpoint: /api/job/update/job_id
router.put("/job/update/:job_id", isAuthenticated, isAdmin, updateJob);

// Show all jobs with optional search, category, and location filters
// Endpoint: /api/jobs/show
router.get("/jobs/show", showJobs);

// Delete a job by ID (admin access required)
// Endpoint: /api/job/delete/id
router.delete("/job/delete/:id", isAuthenticated, isAdmin, deleteJob);

module.exports = router;
