import React from "react";

// mui imports
import { Divider, Stack } from "@mui/material";

// local imports
import { Sidebar, ChatList, Inbox } from "../section/chat/index";

const Messages = () => {
  return (
    <Stack display={"flex"} direction={"row"}>
      {/* {side bar} */}
      <Sidebar />

      {/* {chat list} */}
      <ChatList />
      <Divider sx={{ width: "1px", color: "red", background: "	#e5e6eb" }} />
      {/* {inbox} */}
      <Inbox />
    </Stack>
  );
};

export default Messages;
