import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cn from "classnames";
import styles from "./MainLayout.module.scss";

const MainLayoyt: React.FC = () => {
  return (
    <div className={cn("container", "page", styles.wrapper)}>
      <div className={styles.paper}>
        <Outlet />
      </div>

      <ToastContainer toastClassName={styles.toast} position={"bottom-right"} />
    </div>
  );
};

export default MainLayoyt;
