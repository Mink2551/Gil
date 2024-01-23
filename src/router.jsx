import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Page2 from "./Page2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Page2 />,
  },
]);

export { router };
