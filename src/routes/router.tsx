import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "../pages/home";
import Projects from "../pages/projects"
import Cv from "../pages/cv";
import About from "../pages/about";
import Contact from "../pages/contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
       {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "cv",
        element: <Cv />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);