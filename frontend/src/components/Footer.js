import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

// Footer component: Renders a simple footer with a copyright notice
const Footer = () => {
  // Accessing theme information
  const { palette } = useTheme();

  return (
    <>
      {/* Footer box with specified styling */}
      <Box
        sx={{
          height: "70px",
          bgcolor: palette.secondary.midNightBlue,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Text component for the copyright notice */}
        <Box component="span" sx={{ color: palette.primary.main }}>
          <p>© JOB PORTAL 2023</p>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
