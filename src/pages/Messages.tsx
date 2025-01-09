import React, { useState } from "react";

// mui imports
import { Divider, Stack } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Button,
  Box,
  Typography,
  GlobalStyles,
} from "@mui/material";

// local imports
import { Sidebar, ChatList, Inbox } from "../section/chat/index";

declare module "@mui/material/styles" {
  interface TypeBackground {
    hover?: string;
    selected?: string;
    gradient?: string;
    appBar?: string;
    footer?: string;
    card?: string;
    drawer?: string;
    overlay?: string;
    tableRow?: {
      odd?: string;
      even?: string;
    };
  }
}

const Messages = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      background: {
        default: isDarkMode ? "#121212" : "#ffffff",
        paper: isDarkMode ? "#1e1e1e" : "#f5f5f5",
        appBar: isDarkMode ? "#1f1f1f" : "#f7f7f7",
        footer: isDarkMode ? "#181818" : "#f9f9f9",
        card: isDarkMode ? "#2c2c2c" : "#ffffff",
        drawer: isDarkMode ? "#1e1e1e" : "#fafafa",
        overlay: isDarkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)",
        hover: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.04)",
        selected: isDarkMode
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(0, 0, 0, 0.1)",
        tableRow: {
          odd: isDarkMode ? "#2b2b2b" : "#f9f9f9",
          even: isDarkMode ? "#1e1e1e" : "#ffffff",
        },
        gradient: isDarkMode
          ? "linear-gradient(45deg, #1f1f1f, #3a3a3a)"
          : "linear-gradient(45deg, #ffffff, #f3f3f3)",
      },
      text: {
        primary: isDarkMode ? "#ffffff" : "#000000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applies global styles for the theme */}
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
      />
      <Stack display={"flex"} direction={"row"}>
        {/* {side bar} */}
        <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* {chat list} */}
        <ChatList />
        <Divider sx={{ width: "1px", color: "red", background: "	#e5e6eb" }} />
        {/* {inbox} */}
        <Inbox />
      </Stack>
    </ThemeProvider>
  );
};

export default Messages;
