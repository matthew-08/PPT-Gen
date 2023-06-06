/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FulfilledActionFromAsyncThunk } from '@reduxjs/toolkit/dist/matchers';
import { CreateSessionInput } from '../types';
import apiFetch from '../utils/apiFetch';
import { UserRegisterInput } from '../schemas/register.schema';

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

export const attemptCreateUser = createAsyncThunk(
  'template/createUser',
  async (data: UserRegisterInput, { rejectWithValue }) => {
    console.log('in thunk');
    const res = await apiFetch({
      method: 'POST',
      route: '/api/user',
      data,
    });
    console.log(res);
    if (!res.ok) {
      const json = await res.json();
      console.log(json);
      return rejectWithValue(json.message);
    }
    console.log(res.json());
    return res.json();
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
    builder.addCase(
      attemptCreateUser.fulfilled,
      (state, action: PayloadAction<string>) => {
        const { payload } = action;
      }
    );
  },
});

export default authSlice.reducer;
