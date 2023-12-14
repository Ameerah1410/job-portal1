// Importing necessary functions and color palettes from MUI
import { createTheme } from "@mui/material/styles";
import { blue, lightBlue } from "@mui/material/colors";

// Creating a custom MUI theme using the createTheme function
export const theme = createTheme({
  // Defining the color palette for the theme
  palette: {
    // Primary color settings
    primary: {
      main: blue[500], // Main shade of blue for primary color
    },
    // Secondary color settings
    secondary: {
      main: lightBlue[800], // Main shade of light blue for secondary color
      midNightBlue: "#003366", // Custom mid-night blue color added to the secondary palette
    },
  },
});
