import { configureStore } from '@reduxjs/toolkit';
import templateReducer from '../features/templateSlice';

export const store = configureStore({
  reducer: {
    templateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
