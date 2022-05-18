import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { AppRoutes } from "./components";

interface ITasksFormContext {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const TasksFormContext = createContext<ITasksFormContext>({
  isVisible: false,
  setIsVisible: () => {},
});

const App: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <TasksFormContext.Provider value={{ isVisible, setIsVisible }}>
      <AppRoutes />
    </TasksFormContext.Provider>
  );
};

export default App;
