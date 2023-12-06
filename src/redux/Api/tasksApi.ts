import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITask } from "../../interfaces/task.interface";
import { ITasks } from "../../interfaces/tasks.interface";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  tagTypes: ["Tasks"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], string>({
      query: () => "tasks",
      providesTags: ["Tasks"],
    }),

    getDeleteTasks: builder.query<ITask[], string>({
      query: () => "tasks/deleted",
      providesTags: ["Tasks"],
    }),

    createTask: builder.mutation<
      ITasks,
      { title: string; description: string }
    >({
      query: (task) => ({
        url: "tasks",
        method: "POST",
        body: { task },
      }),
      invalidatesTags: ["Tasks"],
    }),

    udpateTask: builder.mutation<
      ITasks,
      { id: string; task: { title: string; description: string } }
    >({
      query: ({ id, task }) => ({
        url: "tasks",
        method: "PUT",
        body: { taskId: id, task },
      }),
      invalidatesTags: ["Tasks"],
    }),
    
    deleteTask: builder.mutation<ITasks, string>({
      query: (id) => ({
        url: "tasks",
        method: "DELETE",
        body: { taskId: id },
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetDeleteTasksQuery,
  useCreateTaskMutation,
  useUdpateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
