import React from "react";

// mui imports
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Header = () => {
  return (
    <Stack
      display={"flex"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={2}
      py={1.7}>
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
