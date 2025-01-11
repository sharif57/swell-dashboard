import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
    // className="max-w-[1440px] mx-auto"
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  </React.StrictMode>
);
