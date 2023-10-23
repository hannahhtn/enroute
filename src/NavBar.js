/** @format */

import { Stack } from "@mui/material";
import LongMenu from "./LongMenu";
import Location from "./Location";

const NavBar = () => {
  return (
    <Stack direction="column" alignItems="center" justifyContent="center">
      <Stack
        direction="row"
        justifyContent="space-between"
        width="1"
        alignItems="center"
      >
        <LongMenu />
        <Location />
      </Stack>
    </Stack>
  );
};

export default NavBar;
