import { MainLayoyt } from "layouts";
import { createBrowserRouter } from "react-router-dom";
import { EditTask, NotFound, Todos } from "pages";
import { ROUTES_ENUM } from "./routes.enum";

const router = createBrowserRouter([
  {
    path: ROUTES_ENUM.ROOT,
    element: <MainLayoyt />,
    children: [
      {
        path: ROUTES_ENUM.ROOT,
        element: <Todos />,
      },

      {
        path: ROUTES_ENUM.TASK,
        element: <EditTask />,
      },

      {
        path: ROUTES_ENUM.REGISTRATION,
        element: <div />,
      },

      {
        path: ROUTES_ENUM.LOGIN,
        element: <div />,
      },

      {
        path: ROUTES_ENUM.NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
