export interface TaskInterface {
  id: number;
  title: string;
  description?: string;
  isDone: boolean;
}

export interface TasksInterface {
  tasks: TaskInterface[];
  total: number;
}
