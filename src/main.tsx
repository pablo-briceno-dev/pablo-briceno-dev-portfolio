import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { theme } from "./theme/theme.ts";
import { BackgroundFX } from "./theme/BackgroundFX.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackgroundFX />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
