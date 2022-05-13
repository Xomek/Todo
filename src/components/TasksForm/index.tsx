import { FC, HTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import { Button, Form, MyInput } from "../UI";
import styles from "./TasksForm.module.scss";

interface ITasksFormProps extends HTMLAttributes<HTMLDivElement> {}

const TasksForm: FC<ITasksFormProps> = ({ className }) => {
  const TasksFormStyles = stylesFilterAndJoin([styles.tasksForm, className]);

  return (
    <Form className={TasksFormStyles}>
      <MyInput className={styles.input} placeholder="Заголовок" />
      <MyInput className={styles.input} placeholder="Описание" />
      <Button className={styles.button}>Добавить</Button>
    </Form>
  );
};

export default TasksForm;
