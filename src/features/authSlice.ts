import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateSessionInput } from '../types';
import apiFetch from '../utils/apiFetch';

export const attemptCreateSession = createAsyncThunk(
  'template/createSession',
  async (data: CreateSessionInput) => {
    await apiFetch({
      method: 'POST',
      data,
      route: '/api/session',
    })
      .then((res) => res.json())
      .then((r) => console.log(r))
      .catch((r) => console.log(r));
  }
);

type AuthState = {
  id: number | null;
  authStatus: {
    loggedIn: false;
    loading: false;
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
  },
});

export default authSlice.reducer;
