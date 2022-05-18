import { FC, HTMLAttributes, useContext } from "react";
import { TasksFormContext } from "../App";
import { Header, TasksForm } from "../components";
import { Button } from "../components/UI";

interface ILayoutMainProps extends HTMLAttributes<HTMLDivElement> {}

const LayoutMain: FC<ILayoutMainProps> = ({ children }) => {
  const visible = useContext(TasksFormContext);

  const CreateButton = ({ ...props }) => {
    return (
      <Button
        buttonType={"addBtn"}
        onClick={() => {
          visible.setIsVisible((prevState) => !prevState);
        }}
        {...props}
      >
        {visible.isVisible ? "Закрыть" : "Создать задачу"}
      </Button>
    );
  };

  return (
    <div>
      <div className="container">
        <Header buttons={[CreateButton]} />
        {visible.isVisible && <TasksForm />}
        {children}
      </div>
    </div>
  );
};

export default LayoutMain;
