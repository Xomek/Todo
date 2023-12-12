import { PaginationProps } from "./Pagination.types";
import LastSvg from "assets/icons/last.svg";
import cn from "classnames";
import styles from "./Pagination.module.scss";

const Pagination: React.FC<PaginationProps> = ({
  total,
  currentPage,
  itemsPerPage,
  paginate,
  toLastPage,
  toFirstPage,
}) => {
  const pageNumbers: number[] = [];
  const lastPage = Math.ceil(total / itemsPerPage);

  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pageNumbers.length > 1 &&
        pageNumbers.map((number) => (
          <>
            <LastSvg
              onClick={toFirstPage}
              transform="scale(-1, -1)"
              width={30}
              height={30}
              cursor={currentPage === 1 ? "default" : "pointer"}
              fill={currentPage === 1 ? "gray" : "#323232"}
            />

            <div
              key={number}
              className={cn(styles.page, {
                [styles.active]: number === currentPage,
              })}
              onClick={() => currentPage !== number && paginate(number)}
            >
              {number}
            </div>

            <LastSvg
              onClick={toLastPage}
              width={30}
              height={30}
              cursor={currentPage === lastPage ? "default" : "pointer"}
              fill={currentPage === lastPage ? "gray" : "#323232"}
            />
          </>
        ))}
    </div>
  );
};

export default Pagination;
