import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TaskInterface } from "interfaces/task.interface";
import { CreateTaskInterface, UpdateTaskInterface } from "./types";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  tagTypes: ["Tasks"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<TaskInterface[], { skip: number; take: number }>({
      query: (params) => ({
        url: "tasks",
        method: "GET",
      }),

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

    udpateTask: builder.mutation<TaskInterface, UpdateTaskInterface>({
      query: (task) => ({
        url: "tasks",
        method: "PUT",
        body: task,
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
  useCreateTaskMutation,
  useUdpateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
