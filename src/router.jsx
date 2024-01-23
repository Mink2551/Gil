import { createBrowserRouter } from "react-router-dom";
import Home from "./1Home";
import Page2 from "./2About";
import Policy from "./3Policy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Page2 />,
  }, 
  {
    path: "/policy",
    element: <Policy />,
  },   
]);

export { router };
