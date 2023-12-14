// Importing necessary Material-UI components and React
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

// UserInfoDashboard component
const UserInfoDashboard = () => {
  // Accessing the user information from the Redux store
  const { user } = useSelector((state) => state.userProfile);
  const { palette } = useTheme();

  return (
    <>
      {/* Main container with styling */}
      <Box sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}>
        {/* Card to display user information */}
        <Card sx={{ minWidth: 275, bgcolor: palette.secondary.midNightBlue }}>
          {/* Card content */}
          <CardContent>
            {/* Title */}
            <Typography sx={{ fontSize: 16 }} color="#fafafa" gutterBottom>
              Personal Info
            </Typography>

            {/* Horizontal line for separation */}
            <hr style={{ marginBottom: "30px" }} />

            {/* User details */}
            <Typography variant="h6" component="div" sx={{ color: "#fafafa" }}>
              First name: {user && user.firstName}
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: "#fafafa" }}>
              Last name: {user && user.lastName}
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: "#fafafa" }}>
              E-mail: {user && user.email}
            </Typography>

            {/* User status */}
            <Typography
              sx={{ mb: 1.5, color: "grey", pt: 2 }}
              color="text.secondary"
            >
              Status: {user && user.role === 0 ? "Regular user" : "Admin"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

// Exporting the UserInfoDashboard component as the default export
export default UserInfoDashboard;
