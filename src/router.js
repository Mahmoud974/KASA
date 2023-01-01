import { createBrowserRouter } from "react-router-dom";
import Acceuil from "./pages/Home";
import About from "./pages/About";
import Description from "./pages/Description";
import ErreurPage from "./pages/ErreurPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/description/:id",
    element: <Description />,
  },
  {
    path: "*",
    element: <ErreurPage />,
  },
]);
