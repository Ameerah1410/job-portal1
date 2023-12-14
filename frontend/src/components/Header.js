import { Box, styled } from "@mui/material";
import React from "react";
import headerImage from "../images/jobbg.jpg";
import SearchInputEl from "./SearchInputEl";

// Header component: Renders the header section with a background image and search input
const Header = () => {
  // Styled component for custom styling of the header
  const StyleHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
    backgroundImage: `url(${headerImage})`, // Background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: theme.palette.secondary.main,
  }));

  return (
    <>
      {/* Styled header with background image and search input */}
      <StyleHeader>
        <SearchInputEl />
      </StyleHeader>
    </>
  );
};

export default Header;
