import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TaskInterface, TasksInterface } from "interfaces/task.interface";
import { CreateTaskInterface, UpdateTaskInterface } from "./types";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  tagTypes: ["Tasks", "Task"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<TasksInterface, { skip: number; take: number }>({
      query: ({ skip, take }) => ({
        url: `tasks/${skip}/${take}`,
        method: "GET",
      }),

      providesTags: ["Tasks"],
    }),

    getTask: builder.query<TaskInterface, any>({
      query: (taskId) => ({
        url: `tasks/${taskId}`,
        method: "GET",
      }),

      providesTags: ["Task"],
    }),

    createTask: builder.mutation<TaskInterface, CreateTaskInterface>({
      query: (task) => ({
        url: "tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),

    udpateTask: builder.mutation<TaskInterface, UpdateTaskInterface>({
      query: (task) => ({
        url: "tasks",
        method: "PUT",
        body: task,
      }),
      invalidatesTags: ["Tasks", "Task"],
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
  useLazyGetTasksQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useUdpateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
