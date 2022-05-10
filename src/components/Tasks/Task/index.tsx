import { FC, HTMLAttributes } from "react";
import { ITask } from "../../../interfaces/task.interface";
import { stylesFilterAndJoin } from "../../../misc/stylesSortAndJoin";
import styles from "./Task.module.scss";

interface ITaskProps extends HTMLAttributes<HTMLDivElement> {
  task: ITask;
}

const Task: FC<ITaskProps> = ({ className, task, ...props }) => {
  const TaskStyles = stylesFilterAndJoin([styles.task, className]);

  return (
    <div className={TaskStyles} {...props}>
      <h3 className={styles.title}>{task.title}</h3>
      <p className={styles.description}>{task.description}</p>
    </div>
  );
};

export default Task;
