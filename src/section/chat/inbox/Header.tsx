import React from "react";

// mui imports
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import theme from "../../../theme";

const Header = () => {
  console.log(
    "color = ",
    theme.palette.mode === "dark" ? "#0000" : "#fff",
    theme.palette.mode
  );

  return (
    <Stack
      display={"flex"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={2}
      py={1.7}
      position={"sticky"}>
      <Stack
        display={"flex"}
        direction={"row"}
        justifyContent={"left"}
        alignItems={"center"}>
        <Avatar alt="img" src={"https://picsum.photos/seed/henry/100"} />
        <Stack pl={"0.5rem"}>
          <Typography variant="body1">{"Henry Davis"}</Typography>
          <Typography color="gray" variant="subtitle2">
            {"Reply to message"}
          </Typography>
        </Stack>
      </Stack>
      <IconButton>
        <MoreHorizIcon />
      </IconButton>
    </Stack>
  );
};

export default Header;
