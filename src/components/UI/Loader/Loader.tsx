import LoaderIcon from "assets/icons/loader.svg";
import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <LoaderIcon className={styles.loader} />
    </div>
  );
};

export default Loader;
