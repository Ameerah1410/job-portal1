import React, { useEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { jobTypeLoadAction } from "../../redux/actions/jobTypeAction";
import moment from "moment";

// DashCategory component
const DashCategory = () => {
  const dispatch = useDispatch();

  // Fetching job types on component mount
  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, [dispatch]);

  // Retrieving job types from the Redux store
  const { jobType } = useSelector((state) => state.jobTypeAll);
  let data = [];
  data = jobType !== undefined && jobType.length > 0 ? jobType : [];

  // DataGrid columns configuration
  const columns = [
    {
      field: "_id",
      headerName: "Category ID",
      width: 150,
      editable: true,
    },
    {
      field: "jobTypeName",
      headerName: "Category",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Create At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
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
        ></Box>
      ),
    },
  ];

  return (
    <Box>
      {/* Title */}
      <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
        Jobs category
      </Typography>

      {/* Button for creating a new category */}
      <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
        <Button variant="contained" color="success" startIcon={<AddIcon />}>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/admin/category/create"
          >
            Create category
          </Link>
        </Button>
      </Box>

      {/* Paper component for the DataGrid */}
      <Paper sx={{ bgcolor: "secondary.midNightBlue" }}>
        <Box sx={{ height: 400, width: "100%" }}>
          {/* DataGrid component for displaying job categories */}
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
            pageSize={3}
            rowsPerPageOptions={[3]}
            checkboxSelection
          />
        </Box>
      </Paper>
    </Box>
  );
};

// Exporting the DashCategory component as the default export
export default DashCategory;
