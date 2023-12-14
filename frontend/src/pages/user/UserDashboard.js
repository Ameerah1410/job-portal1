// Importing necessary Material-UI components and React
import { Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import StatComponent from "../../components/StatComponent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkIcon from "@mui/icons-material/Work";
import { useSelector } from "react-redux";
import moment from "moment";

// UserDashboard component
const UserDashboard = () => {
  // Accessing the user information from the Redux store
  const { user } = useSelector((state) => state.userProfile);

  return (
    <>
      {/* Main container */}
      <Box>
        {/* Dashboard title */}
        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
          Dashboard
        </Typography>

        {/* Stack for arranging statistics components */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {/* StatComponent for displaying the member since information */}
          <StatComponent
            value={user && moment(user.createdAt).format("YYYY / MM / DD")}
            icon={<CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Member since"
            money=""
          />

          {/* StatComponent for displaying the number of jobs applied to */}
          <StatComponent
            value={user && user.jobsHistory.length}
            icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Number of jobs applied to"
            money=""
          />
        </Stack>
      </Box>
    </>
  );
};

// Exporting the UserDashboard component as the default export
export default UserDashboard;
