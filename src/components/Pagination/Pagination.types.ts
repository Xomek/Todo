export interface PaginationProps {
  total: number;
  currentPage: number;
  itemsPerPage: number;
  paginate: (page: number) => void;
  toLastPage: () => void;
  toFirstPage: () => void;
}
