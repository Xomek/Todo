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
      {!tasks.length && (
        <div className={styles.noTasks}>У вас пока что нету дел</div>
      )}
      {tasks.map((task) => (
        <Task task={task} key={task._id} />
      ))}
    </div>
  );
};

export default Tasks;
