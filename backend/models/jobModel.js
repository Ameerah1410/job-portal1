const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Job schema
const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
      maxlength: 70,
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Description is required"],
    },
    salary: {
      type: String,
      trim: true,
      required: [true, "Salary is required"],
    },
    location: {
      type: String,
    },
    available: {
      type: Boolean,
      default: true, // Default value for availability
    },
    jobType: {
      type: ObjectId,
      ref: "JobType", // Reference to the JobType model
      required: true,
    },
    user: {
      type: ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
  },
  { timestamps: true }
);

// Export the Job model based on the schema
module.exports = mongoose.model("Job", jobSchema);
