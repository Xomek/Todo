import { FC, HTMLAttributes } from "react";
import { ITasks } from "../../interfaces/tasks.interface";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import Task from "./Task";
import styles from "./Tasks.module.scss";

interface ITasksProps extends HTMLAttributes<HTMLDivElement>, ITasks {}

const Tasks: FC<ITasksProps> = ({ className, tasks, ...props }) => {
  const TasksStyles = stylesFilterAndJoin([styles.tasks, className]);

  return (
    <div className={TasksStyles} {...props}>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
};

export default Tasks;
