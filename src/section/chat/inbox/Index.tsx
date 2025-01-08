import React, { Fragment } from "react";

// mui imports
import { Divider, Stack } from "@mui/material";

// local imports
import Header from "./Header";
import Chat from "./Chat";
import Footer from "./Footer";

const Index = () => {
  return (
    <Stack width={"70%"} height={"100vh"} boxShadow={2}>
      <Header />
      <Divider />
      <Stack overflow={"auto"}>
        <Chat isUser={false} />
        <Chat isUser={true} />
        <Chat isUser={false} />
        <Chat isUser={true} />
        <Chat isUser={true} />
        <Chat isUser={false} /> <Chat isUser={true} />
        <Chat isUser={false} />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Index;
