import { FC, HTMLAttributes, useState } from "react";
import { useCreateTaskMutation } from "redux/Api/tasksApi";
import { Button, Form, TextField } from "components/UI";
import cn from "classnames";
import styles from "./TasksForm.module.scss";

const TasksForm: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const TasksFormStyles = cn([styles.tasksForm, className]);
  const [createTask, { isLoading, isError }] = useCreateTaskMutation();
  const [inputValues, setInputValues] = useState<{
    title: string;
    description: string;
  }>({
    title: "",
    description: "",
  });

  function handleChange({ name, value }: { name: string; value: string }) {
    setInputValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  return (
    <Form className={TasksFormStyles}>
      <TextField
        className={styles.input}
        placeholder="Заголовок"
        name="title"
        value={inputValues.title}
        onChange={(e) =>
          handleChange({ name: e.target.name, value: e.target.value })
        }
      />

      <TextField
        className={styles.input}
        placeholder="Описание"
        name="description"
        value={inputValues.description}
        onChange={(e) =>
          handleChange({ name: e.target.name, value: e.target.value })
        }
      />

      <Button
        className={styles.button}
        onClick={() => {
          createTask({
            title: inputValues.title,
            description: inputValues.description,
          });
          setInputValues((prevState) => {
            return { ...prevState, title: "", description: "" };
          });
        }}
      >
        Добавить
      </Button>
    </Form>
  );
};

export default TasksForm;
