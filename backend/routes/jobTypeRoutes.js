const express = require("express");
const router = express.Router();
const {
  createJobType,
  allJobsType,
  updateJobType,
  deleteJobType,
} = require("../controllers/jobTypeController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

// Job type routes

// Create a job type (admin access required)
// Endpoint: /api/type/create
router.post("/type/create", isAuthenticated, isAdmin, createJobType);

// Get all job types
// Endpoint: /api/type/jobs
router.get("/type/jobs", allJobsType);

// Update a job type by ID (admin access required)
// Endpoint: /api/type/update/type_id
router.put("/type/update/:type_id", isAuthenticated, isAdmin, updateJobType);

// Delete a job type by ID (admin access required)
// Endpoint: /api/type/delete/type_id
router.delete("/type/delete/:type_id", isAuthenticated, isAdmin, deleteJobType);

module.exports = router;
