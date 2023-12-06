import TasksForm from "components/TasksForm";
import { Button } from "components/UI";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGetDeleteTasksQuery } from "redux/Api/tasksApi";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const { data } = useGetDeleteTasksQuery("");

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isTrash = pathname === "/trashcan";

  const back = () => {
    navigate(-1);
  };

  return (
    <header className={styles.header}>
      <div className={styles.buttons}>
        {isTrash ? (
          <>
            <Button onClick={back}>Назад</Button>
            <Button>Очистить корзину</Button>
          </>
        ) : (
          <TasksForm />
        )}
      </div>

      <Link to={"/trashcan"}>
        <div className={styles.basket}>
          <img
            src="./assets/image/basket.png"
            alt="trashIcon"
            className={styles.basketImg}
          />
          {data ? (
            <div className={styles.counter}>{data.length}</div>
          ) : (
            <div className={styles.counter}>0</div>
          )}
        </div>
      </Link>
    </header>
  );
};

export default Header;
