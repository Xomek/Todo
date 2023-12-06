import { FooterProps } from "./Footer.types";
import { Pagination } from "components";
import AddIcon from "assets/icons/add.svg";
import CloseIcon from "assets/icons/close.svg";
import styles from "./Footer.module.scss";

const Footer: React.FC<FooterProps> = ({ isCreating, handleFormVisible }) => {
  return (
    <footer className={styles.footer}>
      {isCreating ? (
        <img src={CloseIcon} alt="closeIcon" onClick={handleFormVisible} />
      ) : (
        <img src={AddIcon} alt="addIcon" onClick={handleFormVisible} />
      )}

      <Pagination />
    </footer>
  );
};

export default Footer;
