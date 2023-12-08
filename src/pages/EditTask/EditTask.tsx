import { useEffect, useState } from "react";
import { TextField } from "components/UI";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTaskQuery, useUdpateTaskMutation } from "redux/api/tasksApi";
import SaveIcon from "assets/icons/save.svg";
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

  const handleChange = (value: string, name: string) => {
    setForm((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    updateTask({ ...form, id: data?.id || 0, isDone: data?.isDone });
    navigate(ROUTES_ENUM.ROOT);
  };

  useEffect(() => {
    if (data) setForm({ title: data.title, description: data.description });
  }, [data]);

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
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

      <img src={SaveIcon} alt="saveIcon" onClick={handleSubmit} />
    </form>
  );
};

export default EditTask;
