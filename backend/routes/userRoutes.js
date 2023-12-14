const express = require("express");
const router = express.Router();
const {
  allUsers,
  singleUser,
  editUser,
  deleteUser,
  createUserJobsHistory,
} = require("../controllers/userController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

// User routes

// Get all users (admin access required)
// Endpoint: /api/allusers
router.get("/allusers", isAuthenticated, isAdmin, allUsers);

// Get a single user by ID (authenticated user access required)
// Endpoint: /api/user/id
router.get("/user/:id", isAuthenticated, singleUser);

// Edit user details by ID (authenticated user access required)
// Endpoint: /api/user/edit/id
router.put("/user/edit/:id", isAuthenticated, editUser);

// Delete a user by ID (admin access required)
// Endpoint: /api/admin/user/delete/id
router.delete("/admin/user/delete/:id", isAuthenticated, isAdmin, deleteUser);

// Create a user's job history entry (authenticated user access required)
// Endpoint: /api/user/jobhistory
router.post("/user/jobhistory", isAuthenticated, createUserJobsHistory);

module.exports = router;
