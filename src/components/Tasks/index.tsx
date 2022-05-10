import { FC, HTMLAttributes, useEffect } from "react";
import { ITasks } from "../../interfaces/tasks.interface";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import { useAppDispatch } from "../../redux/hooks";
import { getTasks } from "../../redux/thunks/tasksThunks";
import Task from "./Task";
import styles from "./Tasks.module.scss";

interface ITasksProps extends HTMLAttributes<HTMLDivElement>, ITasks {}

const Tasks: FC<ITasksProps> = ({ className, tasks, ...props }) => {
  const TasksStyles = stylesFilterAndJoin([styles.tasks, className]);
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(getTasks());
  }, []);

  return (
    <div className={TasksStyles} {...props}>
      {!tasks.length && (
        <div className={styles.noTasks}>У вас пока что нету дел</div>
      )}
      {tasks.map((task) => (
        <Task className={styles.task} task={task} key={task._id} />
      ))}
    </div>
  );
};

export default Tasks;
