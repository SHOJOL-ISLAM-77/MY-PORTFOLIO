import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Page/Home/Home.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Resume from "./Components/Resume/Resume.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import ContactMe from "./Components/ContactMe/ContactMe.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        path: "/",
        element: <AboutMe />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/contact-me",
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </HelmetProvider>
);
