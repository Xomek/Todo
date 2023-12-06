import { FC, HTMLAttributes, useEffect, useState } from "react";
import { ITask } from "interfaces/task.interface";
import { useUdpateTaskMutation } from "redux/Api/tasksApi";
import { Button, TextField } from "components/UI";
import cn from "classnames";
import styles from "./Task.module.scss";

interface ITaskProps extends HTMLAttributes<HTMLDivElement> {
  deleteTask: any;
  task: ITask;
}

const Task: FC<ITaskProps> = ({ className, task, deleteTask, ...props }) => {
  const TaskStyles = cn([styles.task, className]);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });

  const [udpateTask] = useUdpateTaskMutation();

  useEffect(() => {
    setInputValues((prevState) => {
      return { ...prevState, title: task.title, description: task.description };
    });
  }, []);

  function toggleEdit() {
    setIsEdit((prevState) => !prevState);
  }

  function onChangeFunction(value: string, name: string) {
    setInputValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function udpateTaskFunction() {
    if (
      !(
        task.title === inputValues.title &&
        task.description === inputValues.description
      )
    )
      udpateTask({
        id: task._id,
        task: {
          title: inputValues.title,
          description: inputValues.description,
        },
      });
    toggleEdit();
  }

  function deleteTaskFunction() {
    deleteTask(task._id);
  }

  return (
    <div className={TaskStyles} {...props}>
      <div className={styles.content}>
        <TextField
          className={styles.input + " " + styles.title}
          name="title"
          onChange={(e) => onChangeFunction(e.target.value, e.target.name)}
          value={inputValues.title}
          readOnly={!isEdit}
        />

        <TextField
          className={styles.input + " " + styles.description}
          name="description"
          onChange={(e) => onChangeFunction(e.target.value, e.target.name)}
          value={inputValues.description}
          readOnly={!isEdit}
        />
      </div>
      {isEdit ? (
        <Button className={styles.updateBtn} onClick={udpateTaskFunction}>
          Сохранить
        </Button>
      ) : (
        <Button className={styles.updateBtn} onClick={toggleEdit}>
          Редактировать
        </Button>
      )}

      <Button className={styles.deleteBtn} onClick={deleteTaskFunction}>
        Удалить
      </Button>
    </div>
  );
};

export default Task;
