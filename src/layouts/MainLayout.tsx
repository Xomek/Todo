import { Outlet } from "react-router-dom";
import { Header } from "components";

const MainLayoyt: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayoyt;
