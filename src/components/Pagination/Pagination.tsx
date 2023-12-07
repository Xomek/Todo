import { PaginationProps } from "./Pagination.types";
import cn from "classnames";
import styles from "./Pagination.module.scss";

const Pagination: React.FC<PaginationProps> = () => {
  return (
    <div className={styles.pagination}>
      <div className={cn(styles.page, styles.active)}>1</div>
      <div className={styles.page}>2</div>
      <div className={styles.page}>3</div>
      <div className={styles.page}>4</div>
      <div className={styles.page}>5</div>
    </div>
  );
};

export default Pagination;
