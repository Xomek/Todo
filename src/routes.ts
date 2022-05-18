import { FC } from "react";
import { Todos, TrashCan } from "./pages";

interface IRoute {
  path: string;
  Component: FC;
}

type RoutesType = IRoute[];

export const publicRoutes: RoutesType = [
  {
    path: "/",
    Component: Todos,
  },
  {
    path: "/trashcan",
    Component: TrashCan,
  },
];
