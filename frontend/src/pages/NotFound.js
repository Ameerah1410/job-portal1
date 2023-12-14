// Importing React for building UI components
import React from "react";
// Importing Box component from Material-UI for layout
import { Box } from "@mui/material";
// Importing Footer and Navbar components from their respective files
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

// Functional component representing the "Not Found" page
const NotFound = () => {
  // Rendering JSX
  return (
    <>
      {/* Rendering the navigation bar */}
      <Navbar />

      {/* Main content container */}
      <Box
        sx={{
          height: "81vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Displaying a heading for the "Not Found" page */}
        <h1>Page not found!</h1>
      </Box>

      {/* Rendering the footer */}
      <Footer />
    </>
  );
};

// Exporting the component as the default export
export default NotFound;
