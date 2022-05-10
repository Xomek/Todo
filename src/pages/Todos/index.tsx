import { FC, HTMLAttributes } from "react";
import { Tasks } from "../../components";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import { useAppSelector } from "../../redux/hooks";
import styles from "./Todos.module.scss";

interface ITodosProps extends HTMLAttributes<HTMLDivElement> {}

const Todos: FC<ITodosProps> = ({ className }) => {
  const TodosStyles = stylesFilterAndJoin(["page", styles.todos, className]);
  const tasks = useAppSelector((state) => state.tasks.tasks);

  return (
    <div className={TodosStyles}>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};

export default Todos;
