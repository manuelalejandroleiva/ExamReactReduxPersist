import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


import { RootState } from './store';


interface Task {
  id: number
  name: string,
  text: string,
  completed: boolean,
}

// Define the initial state using that type

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const task: Task = {
  id: 0,
  name: '',
  text: '',
  completed: false
};

const initialState: Task[] = [task];

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setJsonData: (state, action: PayloadAction<Task[]>) => {
      state.push(...action.payload);
    },
    patchCompleted: (state, action: PayloadAction<{ id: number; completed: boolean }>) => {
      return state.map(task => 
        task.id === action.payload.id 
          ? { ...task, completed: action.payload.completed } 
          : task
      );
    },
    removeTask: (state, action: PayloadAction<{id:number}>) => {
      return state.filter(task => task.id !== action.payload.id);
  },
    getAllTasks: (state) => state,
  },
});

export const { setJsonData, patchCompleted, getAllTasks,removeTask } = taskSlice.actions;

export const selectProjectData = (state: RootState) => state.project;

export default taskSlice.reducer;
