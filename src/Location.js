import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";

const Location = () => {
    const [location, setLocation] = useState("Seattle")
    const handleClick = () => {
        // TODO: set user location with user permission
        setLocation("Seattle");
    }

    return (
      <Stack direction="row" alignItems="center" gap="0.5rem" sx={{ px: 2 }}>
        <PlaceIcon sx={{ color: "#FF1616" }}></PlaceIcon>
        <Typography onClick={handleClick}>{location}</Typography>
      </Stack>
    );
}
 
export default Location;