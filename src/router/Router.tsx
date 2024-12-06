import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyProjects } from "../pages/MyProjects";
import { Layout } from "../pages/Layout";
import { ContactMe } from "../pages/ContactMe";
import { Resume } from "../pages/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "about",
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
      {
path: "resume",
element: <Resume />
      },
    ],
  },
]);
