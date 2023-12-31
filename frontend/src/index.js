import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IncomesContextProvider } from "./context/IncomeContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <IncomesContextProvider>
        <App />
      </IncomesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
