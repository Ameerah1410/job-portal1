import {
  Card,
  CardContent,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

// StatComponent functional component
const StatComponent = ({ value, icon, description, money }) => {
  // Access the theme object using useTheme hook
  const { palette } = useTheme();

  return (
    <>
      {/* Card component for displaying statistics */}
      <Card sx={{ bgcolor: palette.secondary.midNightBlue, width: "100%" }}>
        {/* Card content */}
        <CardContent>
          {/* Icon button for displaying the provided icon */}
          <IconButton sx={{ bgcolor: palette.primary.main, mb: 2 }}>
            {icon}
          </IconButton>

          {/* Main value (statistic) with optional currency */}
          <Typography
            variant="h4"
            sx={{ color: "#fafafa", mb: "1px", fontWeight: 700 }}
          >
            {money !== "" ? money + value : value}
          </Typography>

          {/* Description of the statistic */}
          <Typography
            variant="body2"
            sx={{ color: palette.primary.main, mb: 0 }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default StatComponent;
