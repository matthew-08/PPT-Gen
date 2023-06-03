/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SlideRowState } from '../types';

type SlideRowSubmission = (SlideRowState | false)[];

type SubmitState = {
  submitStatus: boolean;
  slideRows: SlideRowState[];
};

const initialState: SubmitState = {
  submitStatus: false,
  slideRows: [],
};

const submitSlice = createSlice({
  initialState,
  name: 'submit',
  reducers: {
    onChangeSubmitStatus(state, { payload, type }: PayloadAction<boolean>) {
      state.submitStatus = payload;
    },
    onSubmit(state, { payload }: PayloadAction<SlideRowSubmission>) {
      if (!payload) {
      }
    },
  },
});

export default submitSlice.reducer;

export const { onChangeSubmitStatus } = submitSlice.actions;
