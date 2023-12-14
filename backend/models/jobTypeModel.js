const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Job Type schema
const jobTypeSchema = new mongoose.Schema(
  {
    jobTypeName: {
      type: String,
      trim: true,
      required: [true, "Job category is required"],
      maxlength: 70,
    },
    user: {
      type: ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
  },
  { timestamps: true }
);

// Export the JobType model based on the schema
module.exports = mongoose.model("JobType", jobTypeSchema);
