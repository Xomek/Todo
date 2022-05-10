import { FC, HTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import { Button } from "../UI";
import styles from "./Header.module.scss";

interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<IHeaderProps> = ({ className }) => {
  const HeaderStyles = stylesFilterAndJoin([styles.header, className]);

  return (
    <header className={HeaderStyles}>
      <div className="container">
        <Button className={styles.button} buttonType={"addBtn"}>
          Создать задачу
        </Button>
      </div>
    </header>
  );
};

export default Header;
