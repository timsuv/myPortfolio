import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyProjects } from "../pages/MyProjects";
import { Layout } from "../pages/Layout";
import { ContactMe } from "../pages/ContactMe";

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
      {
        path: "contact-me",
        element: <ContactMe />,
      },
    ],
  },
]);
