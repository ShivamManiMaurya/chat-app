import React from "react";

// mui imports
import { IconButton, Stack } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <Stack
      width={"4%"}
      height={"100vh"}
      bgcolor={"lightblue"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"space-between"}
      p={"1rem"}>
      <IconButton sx={{ borderRadius: "0.5rem" }}>
        <ChatBubbleIcon />
      </IconButton>
      <IconButton sx={{ borderRadius: "0.5rem" }}>
        <LogoutIcon />
      </IconButton>
    </Stack>
  );
};

export default Sidebar;
