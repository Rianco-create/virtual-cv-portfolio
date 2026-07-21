import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "../pages/home";
import Projects from "../pages/projects"


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
    ],
  },
]);