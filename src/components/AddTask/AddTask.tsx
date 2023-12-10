import { AddTaskProps } from "./AddTask.types";
import AddIcon from "assets/icons/add.svg";
import CloseIcon from "assets/icons/close.svg";
import styles from "./AddTask.module.scss";

const AddTask: React.FC<AddTaskProps> = ({ isCreating, handleCreating }) => {
  return (
    <div className={styles.addTask}>
      {isCreating ? (
        <CloseIcon onClick={handleCreating} />
      ) : (
        <AddIcon onClick={handleCreating} />
      )}
    </div>
  );
};

export default AddTask;
