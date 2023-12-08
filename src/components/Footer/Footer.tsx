import { FooterProps } from "./Footer.types";
import { AddTask, Pagination } from "components";
import styles from "./Footer.module.scss";

const Footer: React.FC<FooterProps> = ({ isCreating, handleCreating }) => {
  return (
    <footer className={styles.footer}>
      <Pagination />
      <AddTask isCreating={isCreating} handleCreating={handleCreating} />
    </footer>
  );
};

export default Footer;
