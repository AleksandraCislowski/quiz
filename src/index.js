import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { theme } from "./theme/theme";
import App from "./App";
import { ThemeProvider } from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
