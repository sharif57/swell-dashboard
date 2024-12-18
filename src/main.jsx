import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
    // className="max-w-[1440px] mx-auto"
    >
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
