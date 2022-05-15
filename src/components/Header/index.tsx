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
        <div className={styles.inner}>
          <Button
            className={styles.button}
            buttonType={"addBtn"}
            onClick={() => {
              visible.setIsVisible((prevState) => !prevState);
            }}
          >
            {visible.isVisible ? "Закрыть" : "Создать задачу"}
          </Button>
          <div className={styles.basket}>
            <img
              src="./assets/image/basket.png"
              alt=""
              className={styles.basketImg}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
