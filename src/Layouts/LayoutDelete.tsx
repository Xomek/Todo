import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components";
import { Button } from "../components/UI";

interface ILayoutDeleteProps extends HTMLAttributes<HTMLDivElement> {}

const LayoutDelete: FC<ILayoutDeleteProps> = ({ children }) => {
  const BackButton = ({ ...props }) => {
    return (
      <Button {...props}>
        <Link
          style={{ width: "100%", height: "100%", paddingTop: "10px" }}
          to={"/"}
        >
          Вернуться назад
        </Link>
      </Button>
    );
  };

  const ClearButton = ({ ...props }) => {
    return <Button {...props}>Очистить корзину</Button>;
  };

  return (
    <div>
      <div className="container">
        <Header buttons={[BackButton, ClearButton]} />
        {children}
      </div>
    </div>
  );
};

export default LayoutDelete;
