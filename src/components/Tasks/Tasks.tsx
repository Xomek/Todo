import { useGetTasksQuery } from "redux/api/tasksApi";
import { useState } from "react";
import { TasksProps } from "./Tasks.types";
import Task from "./components/Task";
import { CreateTaskForm, Footer } from "components";
import AddIcon from "assets/icons/add.svg";
import styles from "./Tasks.module.scss";

const Tasks: React.FC<TasksProps> = () => {
  const [pagination, setPagination] = useState({ skip: 0, take: 5 });

  const { data } = useGetTasksQuery(pagination);

  const [createFormVisible, setCreateFormVisible] = useState(false);

  const handleFormVisible = () => {
    setCreateFormVisible((prevState) => !prevState);
  };

  const handlePagination = (params: { skip: number; take: number }) => {
    setPagination(params);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tasks}>
        <main className={styles.main}>
          {!data?.length && (
            <div className={styles.notTasks}>
              <div>У вас нет задач</div>
              <img src={AddIcon} alt="addIcon" />
            </div>
          )}

          {data?.map((task) => (
            <Task key={task.id} task={task} />
          ))}

          {createFormVisible && (
            <CreateTaskForm handleFormVisible={handleFormVisible} />
          )}
        </main>

        {data?.length && (
          <Footer
            isCreating={createFormVisible}
            handleFormVisible={handleFormVisible}
            handlePagination={handlePagination}
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;
