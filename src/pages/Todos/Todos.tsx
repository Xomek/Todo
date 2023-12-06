import { Tasks } from "components";
import { useGetTasksQuery } from "redux/api/tasksApi";

const Todos: React.FC = () => {
  const { data } = useGetTasksQuery();

  return (
    <div className="page">
      <Tasks tasks={data || []} />
    </div>
  );
};

export default Todos;
