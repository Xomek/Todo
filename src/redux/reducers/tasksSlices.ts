import { createSlice } from "@reduxjs/toolkit";
import { ITasks } from "../../interfaces/tasks.interface";

interface ITasksState extends ITasks {}

const initialState: ITasksState = {
  tasks: [],
};

const tasksSlices = createSlice({ name: "tasks", initialState, reducers: {} });

export const {} = tasksSlices.actions;
export default tasksSlices.reducer;
