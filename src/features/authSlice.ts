import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateSessionInput } from '../types';

export const attemptCreateSession = createAsyncThunk(
  'template/createSession',
  async (data: CreateSessionInput) => {
    await fetch('http://localhost:3005/api/session', {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((r) => console.log(r));
  }
);

type AuthState = {
  loggedIn: boolean;
  id: number | null;
};

const initialState: AuthState = {
  loggedIn: false,
  id: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
