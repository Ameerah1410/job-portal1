// Importing React and Material-UI components
import { Box } from "@mui/material";
import React from "react";
import HeaderTop from "./HeaderTop";
import SidebarAdm from "./Sidebar";

// Higher-Order Component (HOC) for creating a layout with sidebar
const Layout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        {/* Container with flex layout */}
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {/* Sidebar component */}
          <SidebarAdm />

          {/* Main content container */}
          <Box sx={{ width: "100%", bgcolor: "#002952" }}>
            {/* HeaderTop component */}
            <HeaderTop />

            {/* Box for padding and rendering the wrapped component */}
            <Box sx={{ p: 3 }}>
              <Component {...props} />
            </Box>
          </Box>
        </div>
      </>
    );
  };

// Exporting the Layout component as the default export
export default Layout;
