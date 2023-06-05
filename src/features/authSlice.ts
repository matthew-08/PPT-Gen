/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RejectedActionFromAsyncThunk } from '@reduxjs/toolkit/dist/matchers';
import { CreateSessionInput } from '../types';
import apiFetch from '../utils/apiFetch';

export const attemptCreateSession = createAsyncThunk(
  'template/createSession',
  async (data: CreateSessionInput, { rejectWithValue }) => {
    const res = await apiFetch({
      method: 'POST',
      data,
      route: '/api/session',
    }).then((r) => r.json());
    if (res.message) {
      return rejectWithValue(res.message);
    }
  }
);

type AuthState = {
  id: number | null;
  authStatus: {
    loggedIn: boolean;
    loading: boolean;
    error: null | string;
  };
};

const initialState: AuthState = {
  authStatus: {
    loggedIn: false,
    loading: false,
    error: null,
  },
  id: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(attemptCreateSession.pending, (state) => {
      state.authStatus.loading = true;
    });
    builder.addCase(attemptCreateSession.rejected, (state, action) => {
      console.log(action);
      const { authStatus } = state;
      authStatus.loading = false;
      console.log(action.payload);
    });
  },
});

export default authSlice.reducer;
