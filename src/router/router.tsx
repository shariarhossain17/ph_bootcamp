import { createBrowserRouter } from "react-router";
import Bootcamp from "../pages/Bootcamp/Bootcamp";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/bootcamp",
    element: <Bootcamp />,
  },
]);

export default router;
