// React Library
import React from "react";
import ReactDOM from "react-dom/client";

// Global Styles
import "./index.css";

// Main Component
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Main Component */}
    <App />
  </React.StrictMode>
);
