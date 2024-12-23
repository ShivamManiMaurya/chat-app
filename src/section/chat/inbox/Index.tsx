import React, { Fragment } from "react";

// mui imports
import { Divider, Stack } from "@mui/material";

// local imports
import Header from "./Header";
import Chats from "./Chats";
import Footer from "./Footer";

const Index = () => {
  return (
    <Stack width={"70%"}>
      <Header />
      <Divider />
      <Chats />

      <Footer />
    </Stack>
  );
};

export default Index;
