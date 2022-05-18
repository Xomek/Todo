import { FC, HTMLAttributes } from "react";
import { Tasks } from "../../components";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import { useGetTasksQuery } from "../../redux/Api/tasksApi";
import styles from "./Todos.module.scss";

interface ITodosProps extends HTMLAttributes<HTMLDivElement> {}

const Todos: FC<ITodosProps> = ({ className }) => {
  const TodosStyles = stylesFilterAndJoin(["page", styles.todos, className]);
  const { data, isLoading, isError } = useGetTasksQuery("");

  return (
    <div className={TodosStyles}>
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

export default Todos;
