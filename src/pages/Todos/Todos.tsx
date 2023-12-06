import { Tasks } from "components";
import { useGetTasksQuery } from "redux/Api/tasksApi";

const Todos: React.FC = () => {
  const { data, isLoading, isError } = useGetTasksQuery("");

  return (
    <div className="page">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error...</div>
      ) : data ? (
        <Tasks tasks={data} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Todos;
