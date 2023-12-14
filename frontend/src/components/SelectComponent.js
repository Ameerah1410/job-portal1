import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

// SelectComponent functional component
const SelectComponent = ({ handleChangeCategory, cat }) => {
  // Retrieve jobType from Redux store using useSelector hook
  const { jobType } = useSelector((state) => state.jobTypeAll);

  return (
    <Box sx={{ minWidth: 120 }}>
      {/* Form control for selecting job categories */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        {/* Select dropdown */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          label="Category"
          onChange={handleChangeCategory}
        >
          {/* Default option for all categories */}
          <MenuItem value="">All</MenuItem>

          {/* Map through jobType to create MenuItem options */}
          {jobType &&
            jobType.map((jt) => (
              <MenuItem key={jt._id} value={jt._id}>
                {jt.jobTypeName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponent;
