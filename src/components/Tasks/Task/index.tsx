import { FC, HTMLAttributes } from "react";
import { ITask } from "../../../interfaces/task.interface";
import { stylesFilterAndJoin } from "../../../misc/stylesSortAndJoin";
import {
  useDeleteTaskMutation,
  useUdpateTaskMutation,
} from "../../../redux/Api/tasksApi";
import { Button } from "../../UI";
import styles from "./Task.module.scss";

interface ITaskProps extends HTMLAttributes<HTMLDivElement> {
  task: ITask;
}

const Task: FC<ITaskProps> = ({ className, task, ...props }) => {
  const TaskStyles = stylesFilterAndJoin([styles.task, className]);
  const [deleteTask] = useDeleteTaskMutation();
  const [udpateTask] = useUdpateTaskMutation();

  return (
    <div className={TaskStyles} {...props}>
      <div className={styles.content}>
        <h3 className={styles.title}>{task.title}</h3>
        <p className={styles.description}>{task.description}</p>
      </div>

      <Button
        className={styles.updateBtn}
        buttonType="udpateBtn"
        onClick={() => udpateTask(task._id)}
      >
        Редактировать
      </Button>
      <Button
        className={styles.deleteBtn}
        buttonType="deleteBtn"
        onClick={() => deleteTask(task._id)}
      >
        Удалить
      </Button>
    </div>
  );
};

export default Task;
