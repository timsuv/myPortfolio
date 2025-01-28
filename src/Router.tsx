import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyProjects } from "./pages/MyProjects";
import { Layout } from "./pages/Layout";
import { ContactMe } from "./pages/ContactMe";
import { Resume } from "./pages/Resume";

// Base path for GitHub Pages
const base = "/myPortfolio";

export const router = createBrowserRouter([
  {
    path: `${base}/`, // Prefix all paths with the base directory
    element: <Layout />,
    children: [
      {
        path: `${base}/`, // Home page
        element: <Home />,
      },
      {
        path: `${base}/projects`,
        element: <MyProjects />,
      },
      {
        path: `${base}/contact-me`,
        element: <ContactMe />,
      },
      {
        path: `${base}/resume`,
        element: <Resume />,
      },
    ],
  },
]);
