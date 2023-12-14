import React, { useEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSingleJobAction,
  jobLoadAction,
} from "../../redux/actions/jobAction";

// DashJobs component
const DashJobs = () => {
  const dispatch = useDispatch();

  // Fetching job data when the component mounts
  useEffect(() => {
    dispatch(jobLoadAction());
  }, [dispatch]);

  // Selecting relevant state data from the Redux store
  const { success: deleteSuccess } = useSelector((state) => state.deleteJob);
  const { jobs } = useSelector((state) => state.loadJobs);
  let data = [];
  data = jobs !== undefined && jobs.length > 0 ? jobs : [];

  // Function to delete a job by ID
  const deleteJobById = (e, id) => {
    if (window.confirm(`Click OK to confirm deletion of job ID:"${id}" ?`)) {
      dispatch(deleteSingleJobAction(id));
      if (deleteSuccess && deleteSuccess === true) {
        dispatch(jobLoadAction());
      }
    }
  };

  // DataGrid columns configuration
  const columns = [
    {
      field: "_id",
      headerName: "Job ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Job name",
      width: 150,
    },
    {
      field: "jobType",
      headerName: "Category",
      width: 150,
      valueGetter: (data) => data.row.jobType.jobTypeName,
    },
    {
      field: "user",
      headerName: "User",
      width: 150,
      valueGetter: (data) => data.row.user.firstName,
    },
    {
      field: "available",
      headerName: "available",
      width: 150,
      renderCell: (values) => (values.row.available ? "Yes" : "No"),
    },
    {
      field: "salary",
      headerName: "Salary",
      type: Number,
      width: 150,
      renderCell: (values) => "$" + values.row.salary,
    },
    {
      field: "Actions",
      width: 200,
      renderCell: (values) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "170px",
          }}
        >
          {/* Link to the job update page */}
          <Button variant="contained">
            <Link
              to={`/job/update/${values.row._id}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              Edit
            </Link>
          </Button>
          {/* Button to delete a job */}
          <Button
            onClick={(e) => deleteJobById(e, values.row._id)}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      {/* Title for the component */}
      <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
        All Jobs
      </Typography>

      <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
        {/* Button to navigate to the create job page */}
        <Button variant="contained" color="success" startIcon={<AddIcon />}>
          {" "}
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/admin/job/create"
          >
            Create Job
          </Link>
        </Button>
      </Box>

      {/* Paper container for the DataGrid */}
      <Paper sx={{ bgcolor: "secondary.midNightBlue" }}>
        <Box sx={{ height: 400, width: "100%" }}>
          {/* DataGrid component to display job data */}
          <DataGrid
            getRowId={(row) => row._id}
            sx={{
              "& .MuiTablePagination-displayedRows": {
                color: "white",
              },
              color: "white",
              [`& .${gridClasses.row}`]: {
                bgcolor: (theme) => theme.palette.secondary.main,
              },
              button: {
                color: "#ffffff",
              },
            }}
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      </Paper>
    </Box>
  );
};

// Exporting the DashJobs component as the default export
export default DashJobs;
