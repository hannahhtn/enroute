/** @format */

import { TextField } from "@mui/material";
// import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const SearchBar = () => {
  return (
    <TextField
      fullWidth
      placeholder="Search concerts, festivals, ..."
      sx={{ px: 2 }}
    />
  );
};

export default SearchBar;
