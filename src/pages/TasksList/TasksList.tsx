import { useLazyGetTasksQuery } from "redux/api/tasksApi";
import { useContext, useEffect, useState } from "react";
import { PaperContext } from "layouts/MainLayout";
import { TasksListProps } from "./Tasks.types";
import Task from "./components/Task";
import { AddTask, CreateTaskForm, Pagination } from "components";
import styles from "./TasksList.module.scss";

const TasksList: React.FC<TasksListProps> = () => {
  const height = useContext<any>(PaperContext);

  const [paginationParams, setPaginationParams] = useState({
    skip: 0,
    take: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [isCreating, setIsCreating] = useState(false);

  const [getTasks, { data }] = useLazyGetTasksQuery();

  const handleCreating = () => {
    setIsCreating((prevState) => !prevState);
  };

  const paginate = (page: number) => {
    setCurrentPage(page);
    setPaginationParams((prevState) => ({
      ...prevState,
      skip: prevState.take * (page - 1),
    }));
  };

  useEffect(() => {
    if (paginationParams.take > 0) getTasks(paginationParams);
  }, [paginationParams]);

  useEffect(() => {
    setPaginationParams((prevState) => ({
      ...prevState,
      take: Math.floor((height - 100) / 70), // по хорошему переделать на слежение в лайф режиме на изменением высоты листка
    }));
  }, [height]);

  return (
    <div className={styles.tasks}>
      <div>
        {data?.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}

        {isCreating && <CreateTaskForm handleFormVisible={handleCreating} />}
      </div>

      {!data?.tasks.length && (
        <div className={styles.notTasks}>
          <div>У вас нет задач</div>
          <AddTask isCreating={isCreating} handleCreating={handleCreating} />
        </div>
      )}

      {data?.tasks.length && (
        <footer className={styles.footer}>
          <Pagination
            total={data.total}
            currentPage={currentPage}
            itemsPerPage={paginationParams.take}
            paginate={paginate}
          />
          <AddTask isCreating={isCreating} handleCreating={handleCreating} />
        </footer>
      )}
    </div>
  );
};

export default TasksList;
