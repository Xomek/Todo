import { FC } from "react";
import { Todos, TrashCan } from "./pages";
import { LayoutMain, LayoutDelete } from "./Layouts";

interface IRoute {
  path: string;
  Component: FC;
  Layout: any;
}

type RoutesType = IRoute[];

export const publicRoutes: RoutesType = [
  {
    path: "/",
    Component: Todos,
    Layout: LayoutMain,
  },
  {
    path: "/trashcan",
    Component: TrashCan,
    Layout: LayoutDelete,
  },
];
