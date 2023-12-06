import { Tasks } from "components";
import { useGetDeleteTasksQuery } from "redux/Api/tasksApi";

const TrashCan: React.FC = () => {
  const { data, isLoading, isError } = useGetDeleteTasksQuery("");

  return (
    <div className="page">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error...</div>
      ) : (
        data && <Tasks tasks={data} />
      )}
    </div>
  );
};

export default TrashCan;
