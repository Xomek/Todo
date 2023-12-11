import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TaskInterface, TasksInterface } from "interfaces/task.interface";
import $api from ".";
import {
  CreateTaskInterface,
  GetTasksParams,
  UpdateTaskInterface,
} from "./types";

export const tasksApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<TasksInterface, GetTasksParams>({
      query: ({ skip, take }) => ({
        url: `tasks/${skip}/${take}`,
        method: "GET",
      }),

      providesTags: ["Tasks"],
    }),

    getTask: builder.query<TaskInterface, string>({
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
