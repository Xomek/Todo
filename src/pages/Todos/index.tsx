import { FC, HTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import styles from "./Todos.module.scss";

interface ITodosProps extends HTMLAttributes<HTMLDivElement> {}

const Todos: FC<ITodosProps> = ({ className }) => {
  const TodosStyles = stylesFilterAndJoin(["page", styles.todos, className]);

  return <div className={TodosStyles}></div>;
};

export default Todos;
