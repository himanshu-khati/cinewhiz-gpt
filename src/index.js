import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { appRouter } from "./App";
import appStore from "./utils/appStore";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);

reportWebVitals();
