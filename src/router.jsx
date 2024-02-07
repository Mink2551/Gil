import { createBrowserRouter } from "react-router-dom";
import Home from "./1Home";
import Page2 from "./2About";
import Policy from "./3Policy";
import Workings from "./4Workings";
import Timeline from "./Page 4/Timeline/Timeline";
import Timelinepicture from "./Page 4/Timeline/Timelinepicture";
import Timelineboth from "./Page 4/Timeline/Timelineboth";
import Timeline1 from "./Page 4/Timeline/Timeline1";
import Timeline2 from "./Page 4/Timeline/Timeline2";
import Timeline3 from "./Page 4/Timeline/Timeline3";
import Carlendarmain from "./Page 4/Carlendar/Carlendarmain";
import Partymembermain from "./Page 4/Partymember/Partymembermain";
import Partymembertree from "./Page 4/Partymember/Partymembertree";


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
  {
    path: "/workings",
    element: <Workings/>,
  },
  {
    path: "/timeline",
    element: <Timeline/>,
  },
  {
    path: "/timelinepicture",
    element: <Timelinepicture/>,
  },
  {
    path: "/timelineBoth",
    element: <Timelineboth/>,
  },
  {
    path: "/timeline1",
    element: <Timeline1/>,
  },
  {
    path: "/timeline2",
    element: <Timeline2/>,
  },
  {
    path: "/timeline3",
    element: <Timeline3/>,
  },
  {
    path: "/carlendarmain",
    element: <Carlendarmain/>,
  },
  {
    path: "/partymembermain",
    element: <Partymembermain/>,
  },
  {
    path: "/partymembertree",
    element: <Partymembertree/>,
  },

]);

export { router };
