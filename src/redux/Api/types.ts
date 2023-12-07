export interface CreateTaskInterface {
  title: string;
  description?: string;
}

export interface UpdateTaskInterface {
  id: number;
  title?: string;
  description?: string;
  isDone?: boolean;
}
