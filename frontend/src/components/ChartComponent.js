import { Card, CardContent, useTheme } from "@mui/material";
import React from "react";

// ChartComponent: Renders a Card with specified styling for containing a chart
const ChartComponent = ({ children }) => {
  // Accessing theme information
  const { palette } = useTheme();

  return (
    <>
      {/* Card with specified background color and width */}
      <Card
        sx={{ bgcolor: palette.secondary.midNightBlue, width: "100%" }}
        data-testid="chart-card" // Test ID for unit testing
      >
        {/* Card content, typically containing a chart */}
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
};

export default ChartComponent;
