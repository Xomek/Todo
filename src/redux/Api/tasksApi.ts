import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TaskInterface } from "interfaces/task.interface";
import { CreateTaskInterface } from "./types";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  tagTypes: ["Tasks"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<TaskInterface[], void>({
      query: () => "tasks",
      providesTags: ["Tasks"],
    }),

    getDeletedTasks: builder.query<TaskInterface[], void>({
      query: () => "tasks/deleted",
      providesTags: ["Tasks"],
    }),

    createTask: builder.mutation<TaskInterface, CreateTaskInterface>({
      query: (task) => ({
        url: "tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),

    udpateTask: builder.mutation<
      TaskInterface,
      { id: string; task: { title: string; description: string } }
    >({
      query: ({ id, task }) => ({
        url: "tasks",
        method: "PUT",
        body: { taskId: id, task },
      }),
      invalidatesTags: ["Tasks"],
    }),

    deleteTask: builder.mutation<TaskInterface, number>({
      query: (id) => ({
        url: "tasks",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetDeletedTasksQuery,
  useCreateTaskMutation,
  useUdpateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
