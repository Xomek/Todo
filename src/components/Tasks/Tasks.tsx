import { FC, HTMLAttributes, useEffect } from "react";
import { ITasks } from "interfaces/tasks.interface";
import { useDeleteTaskMutation } from "redux/Api/tasksApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Task from "./components/Task";
import cn from "classnames";
import styles from "./Tasks.module.scss";

interface ITasksProps extends HTMLAttributes<HTMLDivElement>, ITasks {}

const Tasks: FC<ITasksProps> = ({ className, tasks, ...props }) => {
  const TasksStyles = cn([styles.tasks, className]);

  const [deleteTask, { isError, isSuccess, isLoading }] =
    useDeleteTaskMutation();

  useEffect(() => {
    if (isSuccess) toast.success("Задача удалена");
    if (isError) toast.error("Что то пошло не так");
  }, [isError, isSuccess, isLoading]);

  return (
    <div className={TasksStyles} {...props}>
      {!tasks.length && (
        <div className={styles.noTasks}>У вас пока что нету дел</div>
      )}
      {tasks.map((task) => (
        <Task
          className={styles.task}
          task={task}
          key={task._id}
          draggable={true}
          deleteTask={deleteTask}
        />
      ))}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Tasks;
