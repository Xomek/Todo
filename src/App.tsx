import { FC, useState } from "react";
import { AppRoutes, Header, TasksForm } from "./components";

const App: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <Header setIsVisible={setIsVisible} />
      {isVisible && (
        <div className="container">
          <TasksForm />
        </div>
      )}
      <AppRoutes />
    </>
  );
};

export default App;
