import { createBrowserRouter } from "react-router-dom";
import { Todos, TrashCan } from "../pages";
import { ROUTES_ENUM } from "./routes.enum";

const router = createBrowserRouter([
  {
    path: ROUTES_ENUM.ROOT,
    element: <Todos />,
  },

  {
    path: ROUTES_ENUM.TRASH_CAN,
    element: <TrashCan />,
  },

  {
    path: ROUTES_ENUM.NOT_FOUND,
    element: <div />,
  },
]);

export default router;
