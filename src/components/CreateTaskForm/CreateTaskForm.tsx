import { useEffect, useRef, useState } from "react";
import { TextField } from "components/UI";
import { useCreateTaskMutation } from "redux/api/tasksApi";
import { CreateTaskInterface } from "redux/api/types";
import { CreateTaskFormProps } from "./CreateTaskForm.types";
import { toast } from "react-toastify";
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

  const [error, setError] = useState(false);

  const inputTitleRef = useRef<HTMLInputElement>();

  const handleChange = (value: string, name: string) => {
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (form.title) {
      createTask(form)
        .unwrap()
        .then(() => toast.success("Задача успешно создана"));
      handleFormVisible();
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    inputTitleRef.current.focus();
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField
        value={form?.title}
        name="title"
        onChange={(e) => handleChange(e.target.value, e.target.name)}
        placeholder="Заголовок"
        error={error}
        ref={inputTitleRef}
      />

      <TextField
        value={form?.description}
        name="description"
        onChange={(e) => handleChange(e.target.value, e.target.name)}
        placeholder="Описание"
      />

      <input type="submit" hidden />
      <SaveIcon onClick={handleSubmit} />
    </form>
  );
};

export default CreateTaskForm;
