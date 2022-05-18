import { FC, HTMLAttributes } from "react";
import { Tasks } from "../../components";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import { useGetDeleteTasksQuery } from "../../redux/Api/tasksApi";
import styles from "./TrashCan.module.scss";

interface ITodosProps extends HTMLAttributes<HTMLDivElement> {}

const TrashCan: FC<ITodosProps> = ({ className }) => {
  const TrashCanStyles = stylesFilterAndJoin([
    "page",
    styles.trashcan,
    className,
  ]);
  const { data, isLoading, isError } = useGetDeleteTasksQuery("");

  return (
    <div className={TrashCanStyles}>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error...</div>
      ) : data ? (
        <Tasks tasks={data} />
      ) : (
        ""
      )}
    </div>
  );
};

export default TrashCan;
