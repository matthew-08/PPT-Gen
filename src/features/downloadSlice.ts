import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SlideState } from '../types';

export const attemptDownload = createAsyncThunk(
  'download/attempt',
  async (data: { templateInput: SlideState[]; templateId: number }) => {
    console.log('INSIDE ATTEMPT DOWNLOAD');
    console.log(data.templateId);
    const response = await fetch('http://localhost:3005/api/template', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const buffer = await response.arrayBuffer();
    const ok = new Blob([buffer]);
    console.log(ok);
    const testing = URL.createObjectURL(ok);
    console.log(testing);
  }
);

type DownloadSlice = {
  downloadStatus: {
    started: boolean;
    completed: boolean;
    failed: boolean;
    cancelled: boolean;
  };
};

const initialState: DownloadSlice = {
  downloadStatus: {
    started: false,
    completed: false,
    failed: false,
    cancelled: false,
  },
};
const downloadSlice = createSlice({
  name: 'download',
  reducers: {},
  initialState,
});

export default downloadSlice.reducer;
