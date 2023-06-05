import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  loggedIn: boolean;
};

const initialState = {
  loggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
