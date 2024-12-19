import { Stack } from "@mui/material";
import React from "react";
import { Sidebar, ChatList } from "../section/chat/index";

const Messages = () => {
  return (
    <Stack display={"flex"} direction={"row"}>
      {/* {side bar} */}
      <Sidebar />

      {/* {chat list} */}
      <ChatList />

      {/* {inbox} */}
    </Stack>
  );
};

export default Messages;
