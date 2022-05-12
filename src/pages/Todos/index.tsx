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
      <div className="container">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error...</div>
        ) : data?.tasks ? (
          <Tasks tasks={data.tasks} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Todos;
