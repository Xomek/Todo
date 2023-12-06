import { Outlet } from "react-router-dom";

const MainLayoyt: React.FC = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default MainLayoyt;
