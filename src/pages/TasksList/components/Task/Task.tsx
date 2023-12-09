import { useNavigate } from "react-router-dom";
import { TaskProps } from "./Task.types";
import {
  useDeleteTaskMutation,
  useUdpateTaskMutation,
} from "redux/api/tasksApi";
import { toast } from "react-toastify";
import EditIcon from "assets/icons/edit.svg";
import CompleteIcon from "assets/icons/complete.svg";
import ReloadIcon from "assets/icons/reload.svg";
import DeleteIcon from "assets/icons/delete.svg";
import { ConfirmDialog } from "components/UI";
import { useState } from "react";
import cn from "classnames";
import styles from "./Task.module.scss";

const Task: React.FC<TaskProps> = ({ task }) => {
  const navigate = useNavigate();

  const [confirmDialog, setConfirmDialog] = useState(false);

  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUdpateTaskMutation();

  const handleDeleteTask = () => {
    deleteTask(task.id)
      .unwrap()
      .then(() => toast.success("Задача успешно удалена"));
  };

  const handleComplete = () => {
    updateTask({ ...task, isDone: !task.isDone })
      .unwrap()
      .then(() => toast.success("Статус задачи изменен"));
  };

  const handleNavigateTask = () => {
    navigate(`/task/${task.id}`);
  };

  const handleConfirmDialog = () => {
    setConfirmDialog((prevState) => !prevState);
    handleDeleteTask();
  };

  return (
    <div className={cn(styles.row, { [styles.done]: task.isDone })}>
      <div className={styles.title}>{task.title}</div>

      <div className={styles.actions}>
        <img src={EditIcon} onClick={handleNavigateTask} />

        {task.isDone ? (
          <img
            className={styles.reloadIcon}
            src={ReloadIcon}
            onClick={handleComplete}
          />
        ) : (
          <img src={CompleteIcon} onClick={handleComplete} />
        )}

        <img src={DeleteIcon} onClick={() => setConfirmDialog(true)} />
      </div>

      {confirmDialog && (
        <ConfirmDialog
          close={() => setConfirmDialog(false)}
          handleConfirm={handleConfirmDialog}
          title="Вы уверены?"
        >
          Задача будет полностью удалена без возможности восстановления.
        </ConfirmDialog>
      )}
    </div>
  );
};

export default Task;
