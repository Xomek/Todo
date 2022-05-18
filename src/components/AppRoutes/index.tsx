import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../routes";

const AppRoutes: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component, Layout }) => (
        <Route
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
          key={path}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
