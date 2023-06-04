import { configureStore } from '@reduxjs/toolkit';
import templateReducer from '../features/templateSlice';
import appFormStatusReducer from '../features/appFormSlice';
import downloadReducer from '../features/downloadSlice';

export const store = configureStore({
  reducer: {
    templateReducer,
    appFormStatusReducer,
    downloadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
