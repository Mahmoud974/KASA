import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import Acceuil from "./pages/Home";
import About from "./pages/About";
import Description from "./pages/Description";
import ErreurPage from "./pages/ErreurPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
    errorElement: <ErreurPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/description/:id",
    element: <Description />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
