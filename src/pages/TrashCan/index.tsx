import { FC, HTMLAttributes, useEffect, useState } from "react";
import { Tasks } from "../../components";
import { ITask } from "../../interfaces/task.interface";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import { useGetTasksQuery } from "../../redux/Api/tasksApi";
import styles from "./TrashCan.module.scss";

interface ITodosProps extends HTMLAttributes<HTMLDivElement> {}

const TrashCan: FC<ITodosProps> = ({ className }) => {
  const TrashCanStyles = stylesFilterAndJoin([
    "page",
    styles.trashcan,
    className,
  ]);
  const { data, isLoading, isError } = useGetTasksQuery("");
  const [deleteTasks, setDeleteTasks] = useState<ITask[]>([]);

  useEffect(() => {
    if (data) {
      const deleteTasksArr = data.filter((task) => task.isSave);
      setDeleteTasks(deleteTasksArr);
    }
  }, []);

  return (
    <div className={TrashCanStyles}>
      <div className="container">
        <Tasks tasks={deleteTasks} />
      </div>
    </div>
  );
};

export default TrashCan;
