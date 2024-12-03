import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyProjects } from "../pages/MyProjects";
import { Layout } from "../pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "projects",
        element: <MyProjects />,
      },
    ],
  },
]);
