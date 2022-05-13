import { FC, HTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import styles from "./TasksForm.module.scss";

interface ITasksFormProps extends HTMLAttributes<HTMLDivElement> {}

const TasksForm: FC<ITasksFormProps> = ({ className }) => {
  const TasksFormStyles = stylesFilterAndJoin([styles.tasksForm, className]);

  return (
    <div className={TasksFormStyles}>
      <div className="container"></div>
    </div>
  );
};

export default TasksForm;
