import { TaskProps } from "./Task.types";
import { useDeleteTaskMutation } from "redux/api/tasksApi";
import EditIcon from "assets/icons/edit.svg";
import CompleteIcon from "assets/icons/complete.svg";
import DeleteIcon from "assets/icons/delete.svg";
import styles from "./Task.module.scss";

const Task: React.FC<TaskProps> = ({ task }) => {
  const [deleteTask] = useDeleteTaskMutation();

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <p className={styles.row}>
      <div>{task.title}</div>

      <div className={styles.actions}>
        <img src={EditIcon} />
        <img src={CompleteIcon} />
        <img src={DeleteIcon} onClick={handleDeleteTask} />
      </div>
    </p>
  );
};

export default Task;
