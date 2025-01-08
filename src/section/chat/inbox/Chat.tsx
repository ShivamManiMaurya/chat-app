import { Stack, Typography } from "@mui/material";
import React from "react";

interface IProps {
  isUser: boolean;
}

const Chat: React.FC<IProps> = ({ isUser }) => {
  return (
    <Stack
      p={2}
      direction="column"
      alignItems={isUser ? "flex-end" : "flex-start"}>
      {!isUser && (
        <Typography variant="subtitle2" color="textSecondary">
          Sender Name
        </Typography>
      )}
      <Stack
        py={1}
        px={2}
        bgcolor={isUser ? "blue" : "aliceblue"}
        borderRadius={isUser ? "1rem 1rem 0 1rem" : "0 1rem 1rem 1rem"}
        width={"fit-content"}
        maxWidth={"70%"}>
        <Typography variant="subtitle2" color={isUser ? "white" : "black"}>
          This is a user Message This is a user MessageThis is a user
          MessageThis is a user MessageThis is a user MessageThis is a user
          MessageThis is a user MessageThis is a user MessageThis is a user
          Message
        </Typography>
      </Stack>
      <Typography variant="subtitle2" color="textSecondary">
        01:55pm
      </Typography>
    </Stack>
  );
};

export default Chat;
