import React, { useEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { DataGrid, gridClasses, GridToolbar } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  allUserAction,
  deleteSingleUserAction,
} from "../../redux/actions/userActions.js";

// DashUsers component
const DashUsers = () => {
  const dispatch = useDispatch();

  // Fetching all users when the component mounts
  useEffect(() => {
    dispatch(allUserAction());
  }, [dispatch]);

  // Selecting relevant state data from the Redux store
  const { success: deleteSuccess } = useSelector((state) => state.deleteUser);
  const { users } = useSelector((state) => state.allUsers);
  let data = [];
  data = users !== undefined && users.length > 0 ? users : [];

  // Function to delete a user by ID
  const deleteUserById = (e, id) => {
    if (window.confirm(`Click OK to confirm deletion of user ID:"${id}" ?`)) {
      dispatch(deleteSingleUserAction(id));
      if (deleteSuccess && deleteSuccess === true) {
        dispatch(allUserAction());
      }
    }
  };

  // DataGrid columns configuration
  const columns = [
    {
      field: "_id",
      headerName: "User ID",
      width: 150,
      editable: true,
    },

    {
      field: "email",
      headerName: "E_mail",
      width: 150,
    },

    {
      field: "role",
      headerName: "User status",
      width: 150,
      renderCell: (params) =>
        params.row.role === 1 ? "Admin" : "Regular user",
    },

    {
      field: "createdAt",
      headerName: "Creation date",
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
        >
          <Button
            onClick={(e) => deleteUserById(e, values.row._id)}
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
    <>
      <Box>
        {/* Title for the component */}
        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
          All users
        </Typography>

        {/* Paper container for the DataGrid */}
        <Paper sx={{ bgcolor: "secondary.midNightBlue" }}>
          <Box sx={{ height: 400, width: "100%" }}>
            {/* DataGrid component to display user data */}
            <DataGrid
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
              getRowId={(row) => row._id}
              rows={data}
              columns={columns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
              slots={{ toolbar: GridToolbar }}
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

// Exporting the DashUsers component as the default export
export default DashUsers;
