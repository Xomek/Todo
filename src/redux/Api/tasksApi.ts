import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITasks } from "../../interfaces/tasks.interface";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  tagTypes: ["Tasks"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005/",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<ITasks, string>({
      query: () => "tasks",
      providesTags: ["Tasks"],
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

export const { useGetTasksQuery, useDeleteTaskMutation } = tasksApi;
