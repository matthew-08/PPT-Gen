import { configureStore } from '@reduxjs/toolkit';
import templateReducer from '../features/templateSlice';
import submitReducer from '../features/submitSlice';

export const store = configureStore({
  reducer: {
    templateReducer,
    submitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
