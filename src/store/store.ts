import { configureStore } from '@reduxjs/toolkit';
import templateReducer from '../features/templateSlice';
import appFormStatusReducer from '../features/appFormSlice';
import downloadReducer from '../features/downloadSlice';
import authReducer from '../features/authSlice';
import userTemplateReducer from '../features/userTemplateSlice';

export const store = configureStore({
  reducer: {
    templateReducer,
    appFormStatusReducer,
    downloadReducer,
    authReducer,
    userTemplateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
