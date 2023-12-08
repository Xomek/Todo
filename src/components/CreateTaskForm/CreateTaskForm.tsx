import { useState } from "react";
import { TextField } from "components/UI";
import { useCreateTaskMutation } from "redux/api/tasksApi";
import { CreateTaskInterface } from "redux/api/types";
import { CreateTaskFormProps } from "./CreateTaskForm.types";
import SaveIcon from "assets/icons/save.svg";
import styles from "./CreateTaskForm.module.scss";

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({
  handleFormVisible,
}) => {
  const [createTask] = useCreateTaskMutation();

  const [form, setForm] = useState<CreateTaskInterface>({
    title: "",
    description: "",
  });

  const handleChange = (value: string, name: string) => {
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCreateTask = () => {
    createTask(form);
    handleFormVisible();
  };

  return (
    <form className={styles.form}>
      <TextField
        value={form?.title}
        name="title"
        onChange={(e) => handleChange(e.target.value, e.target.name)}
        placeholder="Заголовок"
      />

      <TextField
        value={form?.description}
        name="description"
        onChange={(e) => handleChange(e.target.value, e.target.name)}
        placeholder="Описание"
      />

      <img src={SaveIcon} alt="completeIcon" onClick={handleCreateTask} />
    </form>
  );
};

export default CreateTaskForm;