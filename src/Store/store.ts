import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employeeSlice';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export type InitialState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
