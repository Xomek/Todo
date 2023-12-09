import { PaginationProps } from "./Pagination.types";
import cn from "classnames";
import styles from "./Pagination.module.scss";

const Pagination: React.FC<PaginationProps> = ({
  total,
  currentPage,
  itemsPerPage,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pageNumbers.length > 1 &&
        pageNumbers.map((number) => (
          <div
            key={number}
            className={cn(styles.page, {
              [styles.active]: number === currentPage,
            })}
            onClick={() => currentPage !== number && paginate(number)}
          >
            {number}
          </div>
        ))}
    </div>
  );
};

export default Pagination;
