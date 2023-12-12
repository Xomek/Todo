import { useLazyGetTasksQuery } from "redux/api/tasksApi";
import { useContext, useEffect, useState } from "react";
import { PaperContext } from "layouts/MainLayout";
import { GetTasksParams } from "redux/api/types";
import { TasksListProps } from "./Tasks.types";
import Task from "./components/Task";
import { AddTask, CreateTaskForm, Pagination } from "components";
import styles from "./TasksList.module.scss";
import { Loader } from "components/UI";

const TasksList: React.FC<TasksListProps> = () => {
  const height = useContext<any>(PaperContext);
  const pageSize = Math.floor((height - 100) / 70);

  const [paginationParams, setPaginationParams] = useState<GetTasksParams>({
    skip: 0,
    take: 0,
  });

  const [currentPage, setCurrentPage] = useState(
    Number(localStorage.getItem("page")) || 1
  );
  const [isCreating, setIsCreating] = useState(false);

  const [getTasks, { data, isLoading }] = useLazyGetTasksQuery();

  const handleCreating = () => {
    setIsCreating((prevState) => !prevState);
  };

  const paginate = (page: number) => {
    setCurrentPage(page);
    localStorage.setItem("page", page.toString());
    setPaginationParams((prevState) => ({
      ...prevState,
      skip: prevState.take * (page - 1),
    }));
  };

  const toLastPage = () => {
    paginate(Math.ceil(data.total / paginationParams.take));
  };

  const toFirstPage = () => {
    paginate(1);
  };

  useEffect(() => {
    if (pageSize > 0) {
      setPaginationParams({
        skip: 10 * (currentPage - 1),
        take: pageSize,
      });
    }
  }, [height]);

  useEffect(() => {
    if (paginationParams.take > 0) getTasks(paginationParams);
  }, [paginationParams, currentPage]);

  return (
    <div className={styles.tasks}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            {data?.tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                currentPage={currentPage}
                handleCurrentPage={(page: number) => paginate(page)}
                tasksOnPage={data?.tasks.length}
              />
            ))}

            {isCreating && (
              <CreateTaskForm handleFormVisible={handleCreating} />
            )}
          </div>

          {!data?.tasks.length && (
            <div className={styles.notTasks}>
              <div>У вас нет задач</div>
              <AddTask
                isCreating={isCreating}
                handleCreating={handleCreating}
              />
            </div>
          )}

          {data?.tasks.length && (
            <footer className={styles.footer}>
              <Pagination
                total={data.total}
                currentPage={currentPage}
                itemsPerPage={paginationParams.take}
                paginate={paginate}
                toLastPage={toLastPage}
                toFirstPage={toFirstPage}
              />
              <AddTask
                isCreating={isCreating}
                handleCreating={handleCreating}
              />
            </footer>
          )}
        </>
      )}
    </div>
  );
};

export default TasksList;
