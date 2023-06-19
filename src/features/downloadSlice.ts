/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlideState } from '../types';
import apiFetch from '../utils/apiFetch';

export const attemptDownload = createAsyncThunk(
  'download/attempt',
  async (data: { templateInput: SlideState[]; templateId: number }) => {
    const response = await apiFetch({
      method: 'POST',
      route: '/api/templates',
      data,
    });
    const buffer = await response.arrayBuffer();
    const ok = new Blob([buffer]);
    const downloadURL = URL.createObjectURL(ok);
    return downloadURL;
  }
);

type DownloadStatus = {
  started: boolean;
  completed: boolean;
  failed: boolean;
  cancelled: boolean;
};

type DownloadSlice = {
  downloadStatus: DownloadStatus;
  url: string;
  name: string;
};

const initialState: DownloadSlice = {
  downloadStatus: {
    started: false,
    completed: false,
    failed: false,
    cancelled: false,
  },
  url: '',
  name: '',
};
const downloadSlice = createSlice({
  name: 'download',
  reducers: {
    onChangeName(state, { payload }: PayloadAction<string>) {
      state.name = payload;
    },
    onChangeDownloadStatus(state, { payload }: PayloadAction<DownloadStatus>) {
      state.downloadStatus = payload;
    },
  },
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

export const { onChangeName, onChangeDownloadStatus } = downloadSlice.actions;

export default downloadSlice.reducer;
