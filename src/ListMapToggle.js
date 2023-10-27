/** @format */

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

const ListMapToggle = () => {
  const [mode, setMode] = useState("list");
  const handleChange = (event, newMode) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  return (
    <ToggleButtonGroup
      value={mode}
      exclusive
      onChange={handleChange}
      aria-label="view mode"
      size="small"
          sx={{
          background:"black"
      }} 
    >
      <ToggleButton value="list" aria-label="list">
        List
      </ToggleButton>
      <ToggleButton value="map" aria-label="map">
        Map
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ListMapToggle;
