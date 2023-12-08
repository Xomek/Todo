import { useGetTasksQuery } from "redux/api/tasksApi";
import { useState } from "react";
import { TasksListProps } from "./Tasks.types";
import Task from "./components/Task";
import { AddTask, CreateTaskForm, Footer } from "components";
import styles from "./TasksList.module.scss";

const TasksList: React.FC<TasksListProps> = () => {
  const [pagination, setPagination] = useState({ skip: 0, take: 5 });
  const [isCreating, setIsCreating] = useState(false);

  const { data } = useGetTasksQuery(pagination);

  const handleCreating = () => {
    setIsCreating((prevState) => !prevState);
  };

  return (
    <div className={styles.tasks}>
      <div>
        {data?.map((task) => (
          <Task key={task.id} task={task} />
        ))}

        {isCreating && <CreateTaskForm handleFormVisible={handleCreating} />}
      </div>

      {!data?.length && (
        <div className={styles.notTasks}>
          <div>У вас нет задач</div>
          <AddTask isCreating={isCreating} handleCreating={handleCreating} />
        </div>
      )}

      {data?.length && (
        <Footer isCreating={isCreating} handleCreating={handleCreating} />
      )}
    </div>
  );
};

export default TasksList;
