import { ListProps } from "./List.types";
import cn from "classnames";
import styles from "./List.module.scss";

function List<T = unknown>({
  data,
  renderItem,
  className,
  ...props
}: ListProps<T>) {
  return (
    <div className={cn(styles.list, className)} style={{ ...props }}>
      {data.map((item, index) => (
        <div
          key={
            typeof item === "object" && item && "id" in item
              ? (item.id as string)
              : index
          }
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

export default List;
