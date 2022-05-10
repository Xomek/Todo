import { FC, HTMLAttributes } from "react";
import { ITask } from "../../../interfaces/task.interface";
import { stylesFilterAndJoin } from "../../../misc/stylesSortAndJoin";
import { Button } from "../../UI";
import styles from "./Task.module.scss";

interface ITaskProps extends HTMLAttributes<HTMLDivElement> {
  task: ITask;
}

const Task: FC<ITaskProps> = ({ className, task, ...props }) => {
  const TaskStyles = stylesFilterAndJoin([styles.task, className]);

  return (
    <div className={TaskStyles} {...props}>
      <div className={styles.content}>
        <h3 className={styles.title}>{task.title}</h3>
        <p className={styles.description}>{task.description}</p>
      </div>
      <Button className={styles.deleteBtn} buttonType="deleteBtn">
        Удалить
      </Button>
    </div>
  );
};

export default Task;
