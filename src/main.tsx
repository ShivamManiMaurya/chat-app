import React from "react";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
