import { TaskInterface } from "interfaces/task.interface";

export interface TaskProps {
  task: TaskInterface;
  tasksOnPage: number;
  handleCurrentPage: (page: number) => void;
  currentPage: number;
}
