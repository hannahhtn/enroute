/** @format */

import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
// import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const handleClick = () => {
    setInput("");
  };

  return (
    <TextField
      fullWidth
      placeholder="Search concerts, festivals, ..."
      sx={{ px: 2 }}
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon color={"grey"} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClick}
              // onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {/* // {showPassword ? <VisibilityOff /> : <Visibility />} */}
              <BackspaceIcon color="grey" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
