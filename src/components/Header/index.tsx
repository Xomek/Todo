import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import { useGetDeleteTasksQuery } from "../../redux/Api/tasksApi";
import styles from "./Header.module.scss";

interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {
  buttons?: any[];
}

const Header: FC<IHeaderProps> = ({ className, buttons }) => {
  const HeaderStyles = stylesFilterAndJoin([styles.header, className]);
  const { data } = useGetDeleteTasksQuery("");

  return (
    <header className={HeaderStyles}>
      <div className={styles.inner}>
        {buttons &&
          buttons.map((MyButton) => (
            <MyButton key={MyButton} className={styles.button} />
          ))}
        <Link to={"/trashcan"}>
          <div className={styles.basket}>
            <img
              src="./assets/image/basket.png"
              alt=""
              className={styles.basketImg}
            />
            {data ? (
              <div className={styles.counter}>{data.length}</div>
            ) : (
              <div className={styles.counter}>0</div>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
