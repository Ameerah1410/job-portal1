import { Box, CircularProgress } from "@mui/material";
import React from "react";

// LoadingBox component
const LoadingBox = () => {
  return (
    <>
      {/* Main container */}
      <Box
        sx={{
          minHeight: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* CircularProgress component for indicating loading */}
        <CircularProgress />
      </Box>
    </>
  );
};

// Exporting the LoadingBox component as the default export
export default LoadingBox;
