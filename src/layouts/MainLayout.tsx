import { createContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cn from "classnames";
import styles from "./MainLayout.module.scss";

export const PaperContext = createContext({});

const MainLayoyt: React.FC = () => {
  const paperRef = useRef<HTMLDivElement>();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(paperRef?.current.offsetHeight);
  }, []);

  return (
    <PaperContext.Provider value={height}>
      <div className={cn("container", "page", styles.wrapper)}>
        <div ref={paperRef} className={styles.paper}>
          <Outlet />
        </div>

        <ToastContainer
          toastClassName={styles.toast}
          position={"bottom-right"}
        />
      </div>
    </PaperContext.Provider>
  );
};

export default MainLayoyt;
