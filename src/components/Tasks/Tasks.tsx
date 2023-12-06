import { useState } from "react";
import { TasksProps } from "./Tasks.types";
import Task from "./components/Task";
import { CreateTaskForm, Footer } from "components";
import AddIcon from "assets/icons/add.svg";
import styles from "./Tasks.module.scss";

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
  const [createFormVisible, setCreateFormVisible] = useState(false);

  const handleFormVisible = () => {
    setCreateFormVisible((prevState) => !prevState);
  };

  return (
    <div className={styles.tasks}>
      <main className={styles.main}>
        {!tasks.length && (
          <div className={styles.notTasks}>
            <div>У вас нет задач</div>
            <img src={AddIcon} alt="addIcon" />
          </div>
        )}

        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}

        {createFormVisible && (
          <CreateTaskForm handleFormVisible={handleFormVisible} />
        )}
      </main>

      <Footer
        isCreating={createFormVisible}
        handleFormVisible={handleFormVisible}
      />
    </div>
  );
};

export default Tasks;
