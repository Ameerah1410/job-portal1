import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateJobAction } from "../../redux/actions/jobAction";
import { Button, TextField, Typography, Box } from "@mui/material";
import { useFormik } from "formik";

// EditJob component
const EditJob = () => {
  // Accessing the job ID from the URL params
  const { id } = useParams();
  const dispatch = useDispatch();

  // Accessing the jobs from the Redux store
  const { jobs } = useSelector((state) => state.loadJobs);

  // Creating a navigation hook
  const navigate = useNavigate();

  // Finding the specific job using the ID
  const job = jobs.find((job) => job._id === id);

  // Using useFormik hook for handling form state and submission
  const formik = useFormik({
    initialValues: {
      title: job.title,
      id: job._id,
      description: job.description,
      salary: job.salary,
      location: job.location,
    },
    onSubmit: (values, actions) => {
      // Dispatching updateJobAction with the job ID and updated values
      dispatch(updateJobAction(job._id, values));
      // Navigating back to the admin jobs page
      navigate("/admin/jobs");
    },
  });

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 4,
      }}
    >
      {/* Job edit form */}
      <form onSubmit={formik.handleSubmit} className="form_style border-style">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Form title */}
          <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
            Edit Job
          </Typography>

          {/* Text field for job ID */}
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="id"
            label="ID"
            name="id"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Enter the ID"
            value={formik.values.id}
            onChange={formik.handleChange}
          />

          {/* Text field for job title */}
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="title"
            name="title"
            label="Title"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Enter the job name"
            value={formik.values.title}
            onChange={formik.handleChange}
          />

          {/* Text field for job salary */}
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="salary"
            name="salary"
            label="Salary"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Enter the salary"
            value={formik.values.salary}
            onChange={formik.handleChange}
          />

          {/* Text field for job description */}
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="description"
            name="description"
            label="Description"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Enter the description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />

          {/* Button for submitting the form */}
          <Button fullWidth variant="contained" type="submit">
            Save Changes
          </Button>
        </Box>
      </form>
    </Box>
  );
};

// Exporting the EditJob component as the default export
export default EditJob;
