import { TaskProps } from "./Task.types";
import {
  useDeleteTaskMutation,
  useUdpateTaskMutation,
} from "redux/api/tasksApi";
import EditIcon from "assets/icons/edit.svg";
import CompleteIcon from "assets/icons/complete.svg";
import ReloadIcon from "assets/icons/reload.svg";
import DeleteIcon from "assets/icons/delete.svg";
import cn from "classnames";
import styles from "./Task.module.scss";

const Task: React.FC<TaskProps> = ({ task }) => {
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUdpateTaskMutation();

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  const handleComplete = () => {
    updateTask({ ...task, isDone: !task.isDone });
  };

  return (
    <p className={cn(styles.row, { [styles.done]: task.isDone })}>
      <div className={styles.title}>{task.title}</div>

      <div className={styles.actions}>
        <img src={EditIcon} />

        {task.isDone ? (
          <img
            className={styles.reloadIcon}
            src={ReloadIcon}
            onClick={handleComplete}
          />
        ) : (
          <img src={CompleteIcon} onClick={handleComplete} />
        )}

        <img src={DeleteIcon} onClick={handleDeleteTask} />
      </div>
    </p>
  );
};

export default Task;
