/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SlideState } from '../types';

export const attemptDownload = createAsyncThunk(
  'download/attempt',
  async (data: { templateInput: SlideState[]; templateId: number }) => {
    const response = await fetch('http://localhost:3005/api/template', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const buffer = await response.arrayBuffer();
    const ok = new Blob([buffer]);
    const downloadURL = URL.createObjectURL(ok);
    return downloadURL;
  }
);

type DownloadSlice = {
  downloadStatus: {
    started: boolean;
    completed: boolean;
    failed: boolean;
    cancelled: boolean;
  };
  url: string;
};

const initialState: DownloadSlice = {
  downloadStatus: {
    started: false,
    completed: false,
    failed: false,
    cancelled: false,
  },
  url: '',
};
const downloadSlice = createSlice({
  name: 'download',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(attemptDownload.pending, (state) => {
      state.downloadStatus.started = true;
    });
    builder.addCase(attemptDownload.fulfilled, (state, action) => {
      if (action.payload) {
        state.downloadStatus.completed = true;
        state.downloadStatus.started = false;
        state.url = action.payload;
      }
    });
  },
});

export default downloadSlice.reducer;
