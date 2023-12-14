import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import StatComponent from "../../components/StatComponent";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import { Chart } from "react-google-charts";
import { data, options } from "./data/data";
import ChartComponent from "../../components/ChartComponent";

// AdminDashboard component
const AdminDashboard = () => {
  return (
    <>
      {/* Main container */}
      <Box>
        {/* Title */}
        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
          Admin Dashboard
        </Typography>

        {/* Statistics section */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {/* StatComponent for displaying the number of administrators */}
          <StatComponent
            value="45621"
            icon={
              <SupervisorAccountIcon sx={{ color: "#fafafa", fontSize: 30 }} />
            }
            description="Administrators"
            money=""
          />

          {/* StatComponent for displaying the number of jobs */}
          <StatComponent
            value="450"
            icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Jobs"
            money=""
          />

          {/* StatComponent for displaying the number of job categories */}
          <StatComponent
            value="6548"
            icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Jobs categories"
            money=""
          />
        </Stack>

        {/* Chart section */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ mt: 3 }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {/* ChartComponent for displaying a bar chart */}
          <ChartComponent>
            <Chart
              chartType="Bar"
              data={data}
              options={options}
              width="100%"
              height="300px"
              legendToggle
            />
          </ChartComponent>
        </Stack>
      </Box>
    </>
  );
};

// Exporting the AdminDashboard component as the default export
export default AdminDashboard;
