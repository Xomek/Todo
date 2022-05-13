import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AppRoutes, Header, TasksForm } from "./components";

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
      <Header />
      {isVisible && (
        <div className="container">
          <TasksForm />
        </div>
      )}
      <AppRoutes />
    </TasksFormContext.Provider>
  );
};

export default App;
