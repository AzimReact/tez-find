import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { Provider } from "react-redux";
import { store } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/index";
import { Iphones } from "./pages/iphones/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:iphoneType",
    element: <Iphones />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
