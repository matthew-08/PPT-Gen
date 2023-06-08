/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateSessionInput, CreateUserPayload } from '../types';
import apiFetch from '../utils/apiFetch';
import { UserRegisterInput } from '../schemas/register.schema';
import { setToken } from '../utils/tokenUtil';

export const attemptCreateSession = createAsyncThunk(
  'template/createSession',
  async (data: CreateSessionInput, { rejectWithValue }) => {
    const res = await apiFetch({
      method: 'POST',
      data,
      route: '/api/sessions',
    }).then((r) => r.json());
    if (res.message) {
      return rejectWithValue(res.message);
    }
  }
);

export const attemptCreateUser = createAsyncThunk(
  'template/createUser',
  async (data: UserRegisterInput, { rejectWithValue }) => {
    const res = await apiFetch({
      method: 'POST',
      route: '/api/users',
      data,
    });
    if (!res.ok) {
      const json = await res.json();
      return rejectWithValue(json.message);
    }
    return res.json();
  }
);

export const attemptRefreshSession = createAsyncThunk(
  'template/refreshSession',
  async (_, { abort }) => {
    const res = await apiFetch({
      method: 'GET',
      route: '/api/sessions',
    });
    if (!res.ok) {
      return abort();
    }
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

const validAuthStatus = {
  loggedIn: true,
  loading: false,
  error: null,
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
      const { authStatus } = state;
      authStatus.loading = false;
    });
    builder.addCase(
      attemptCreateUser.fulfilled,
      (state, action: PayloadAction<CreateUserPayload>) => {
        state.authStatus = validAuthStatus;
        const { id, accessToken } = action.payload;
        state.id = id;
        setToken(accessToken);
      }
    );
    builder.addCase(
      attemptRefreshSession.fulfilled,
      (state, action: PayloadAction<{ id: number }>) => {
        const { id } = action.payload;
        if (id) {
          state.authStatus = validAuthStatus;
          state.id = id;
        }
      }
    );
    builder.addCase(attemptRefreshSession.rejected, (state, action) => {
      state.authStatus = {
        error: null,
        loading: false,
        loggedIn: false,
      };
      state.id = null;
    });
  },
});

export default authSlice.reducer;
