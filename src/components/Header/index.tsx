import { Dispatch, FC, HTMLAttributes, SetStateAction } from "react";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import { useCreateTaskMutation } from "../../redux/Api/tasksApi";
import { Button } from "../UI";
import styles from "./Header.module.scss";

interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = ({ className, setIsVisible }) => {
  const HeaderStyles = stylesFilterAndJoin([styles.header, className]);
  const [createTask, { isLoading, isError }] = useCreateTaskMutation();

  return (
    <header className={HeaderStyles}>
      <div className="container">
        <Button
          className={styles.button}
          buttonType={"addBtn"}
          onClick={() => {
            setIsVisible((prevState) => !prevState);
          }}
        >
          Создать задачу
        </Button>
      </div>
    </header>
  );
};

export default Header;
