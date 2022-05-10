import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../routes";

const AppRoutes: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
