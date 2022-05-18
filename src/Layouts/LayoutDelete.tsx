import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components";
import { Button } from "../components/UI";

interface ILayoutDeleteProps extends HTMLAttributes<HTMLDivElement> {}

const LayoutDelete: FC<ILayoutDeleteProps> = ({ children }) => {
  const BackButton = ({ ...props }) => {
    return (
      <Button onClick={() => {}} {...props}>
        <Link to={"/"}>Вернуться назад</Link>
      </Button>
    );
  };

  return (
    <div>
      <div className="container">
        <Header buttons={[BackButton]} />
        {children}
      </div>
    </div>
  );
};

export default LayoutDelete;
