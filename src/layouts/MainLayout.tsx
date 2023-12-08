import { Outlet } from "react-router-dom";
import cn from "classnames";
import styles from "./MainLayout.module.scss";

const MainLayoyt: React.FC = () => {
  return (
    <div className={cn("container", "page", styles.wrapper)}>
      <div className={styles.paper}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayoyt;
