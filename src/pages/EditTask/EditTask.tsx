import { useEffect, useState } from "react";
import { TextField } from "components/UI";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTaskQuery, useUdpateTaskMutation } from "redux/api/tasksApi";
import { toast } from "react-toastify";
import SaveIcon from "assets/icons/save.svg";
import BackIcon from "assets/icons/back.svg";
import { ROUTES_ENUM } from "routes/routes.enum";
import cn from "classnames";
import styles from "./EditTask.module.scss";

const EditTask: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetTaskQuery(id);
  const navigate = useNavigate();
  const [updateTask] = useUdpateTaskMutation();

  const [form, setForm] = useState<{ title: string; description?: string }>({
    title: "",
    description: "",
  });

  const [isChange, setIsChange] = useState(false);

  const handleChange = (value: string, name: string) => {
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      !(data?.title === form.title && data?.description === form.description)
    ) {
      updateTask({ ...form, id: data?.id || 0, isDone: data?.isDone })
        .unwrap()
        .then(() => toast.success("Задача успешно обновлена"));
      navigate(ROUTES_ENUM.ROOT);
    }
  };

  const back = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (data) setForm({ title: data.title, description: data.description });
  }, [data]);

  useEffect(() => {
    if (data?.title === form.title && data?.description === form.description) {
      setIsChange(false);
    } else {
      setIsChange(true);
    }
  }, [form]);

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <BackIcon className={styles.backIcon} onClick={back} />

      <TextField
        className={cn(styles.input, styles.title)}
        value={form?.title}
        name="title"
        placeholder="Заголовок"
        onChange={(e) => handleChange(e.target.value, e.target.name)}
      />

      <textarea
        className={cn(styles.input, styles.description)}
        value={form?.description}
        name="description"
        placeholder="Описание"
        onChange={(e) => handleChange(e.target.value, e.target.name)}
      />

      <SaveIcon
        fill={isChange ? "black" : "gray"}
        cursor={isChange ? "pointer" : "default"}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default EditTask;
