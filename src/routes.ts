import { FC } from "react";
import { Todos } from "./pages";

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
];
