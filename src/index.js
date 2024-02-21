import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/auth";
import { DataContextProvider } from "./context/data";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

reportWebVitals();
