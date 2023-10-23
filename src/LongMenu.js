import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const options = [
  "Home",
  "Profile",
  "Event Categories",
  "My Events",
  "Community",
];

// const ITEM_HEIGHT = 48;

const LongMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [page, setPage] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{p:2}}
      >
        <MenuIcon sx={{ fontSize: 50}} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === page}
            onClick={(e) => {
              setPage(option);
              handleClose();
            }}
          >
            {option}
          </MenuItem>
        ))}
        
      </Menu>
    </div>
  );
}

export default LongMenu;