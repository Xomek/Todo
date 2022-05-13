import { FC, HTMLAttributes, useContext } from "react";
import { TasksFormContext } from "../../App";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import { Button } from "../UI";
import styles from "./Header.module.scss";

interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<IHeaderProps> = ({ className }) => {
  const HeaderStyles = stylesFilterAndJoin([styles.header, className]);
  const visible = useContext(TasksFormContext);

  return (
    <header className={HeaderStyles}>
      <div className="container">
        <Button
          className={styles.button}
          buttonType={"addBtn"}
          onClick={() => {
            visible.setIsVisible((prevState) => !prevState);
          }}
        >
          Создать задачу
        </Button>
      </div>
    </header>
  );
};

export default Header;
