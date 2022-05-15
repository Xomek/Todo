import { FC, HTMLAttributes, useEffect, useState } from "react";
import { ITask } from "../../../interfaces/task.interface";
import { stylesFilterAndJoin } from "../../../misc/stylesSortAndJoin";
import {
  useDeleteTaskMutation,
  useUdpateTaskMutation,
} from "../../../redux/Api/tasksApi";
import { Button, MyInput } from "../../UI";
import styles from "./Task.module.scss";

interface ITaskProps extends HTMLAttributes<HTMLDivElement> {
  task: ITask;
}

const Task: FC<ITaskProps> = ({ className, task, ...props }) => {
  const TaskStyles = stylesFilterAndJoin([styles.task, className]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });
  const [deleteTask] = useDeleteTaskMutation();
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

  return (
    <div className={TaskStyles} {...props}>
      <div className={styles.content}>
        <MyInput
          className={styles.input + " " + styles.title}
          inputType={"taskInput"}
          name="title"
          onChange={(e) => onChangeFunction(e.target.value, e.target.name)}
          value={inputValues.title}
          readOnly={!isEdit}
        />
        <MyInput
          className={styles.input + " " + styles.description}
          inputType={"taskInput"}
          name="description"
          onChange={(e) => onChangeFunction(e.target.value, e.target.name)}
          value={inputValues.description}
          readOnly={!isEdit}
        />
      </div>
      {isEdit ? (
        <Button
          className={styles.updateBtn}
          buttonType="udpateBtn"
          onClick={() => {
            udpateTask({
              id: task._id,
              task: {
                title: inputValues.title,
                description: inputValues.description,
              },
            });
            toggleEdit();
          }}
        >
          Сохранить
        </Button>
      ) : (
        <Button
          className={styles.updateBtn}
          buttonType="udpateBtn"
          onClick={toggleEdit}
        >
          Редактировать
        </Button>
      )}

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
