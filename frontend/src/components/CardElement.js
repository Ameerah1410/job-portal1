import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

// CardElement: Renders a card with information about a job
const CardElement = ({ jobTitle, description, category, location, id }) => {
  // Accessing theme information
  const { palette } = useTheme();

  return (
    <Card sx={{ minWidth: 275, mb: 3, mt: 3 }}>
      {/* Card content */}
      <CardContent>
        {/* Location information with an icon */}
        <Typography
          sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 500 }}
          gutterBottom
        >
          <IconButton>
            <LocationOnIcon
              sx={{ color: palette.secondary.main, fontSize: 18 }}
            />
          </IconButton>{" "}
          {location}
        </Typography>
        {/* Job title */}
        <Typography variant="h5" component="div">
          {jobTitle}
        </Typography>
        {/* Job category */}
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {category}
        </Typography>
        {/* Shortened job description */}
        <Typography variant="body2">
          Description: {description.split(" ").slice(0, 15).join(" ") + "..."}
        </Typography>
      </CardContent>
      {/* Card actions (e.g., a button) */}
      <CardActions>
        <Button
          disableElevation
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
        >
          {/* Link to the detailed job page */}
          <Link
            style={{ textDecoration: "none", color: "white", boxShadow: 0 }}
            to={`/job/${id}`}
          >
            More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardElement;
