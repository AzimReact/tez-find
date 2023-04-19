import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Main, Iphones } from "./pages";

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/:iphoneType",
    element: <Iphones />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
