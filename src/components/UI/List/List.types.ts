export interface ListProps<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
  flexDirection?: DIRECTION_LIST;
  gap?: number;
  className?: string;
}

export enum DIRECTION_LIST {
  ROW = "row",
  COLUMN = "column",
}
