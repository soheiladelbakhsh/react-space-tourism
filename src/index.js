import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";

import "./scss/forward.scss";
import Context from "./context/Context";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./theme/Theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Context>
          <App />
        </Context>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
