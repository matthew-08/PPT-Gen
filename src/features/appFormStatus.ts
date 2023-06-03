/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SlideRowState } from '../types';

type SlideRowSubmission = (SlideRowState | false)[];

type SubmitState = {
  submitStatus: boolean;
  slideRows: SlideRowState[];
  autoFillStatus: boolean;
};

const initialState: SubmitState = {
  submitStatus: false,
  slideRows: [],
  autoFillStatus: false,
};

const appFormStatus = createSlice({
  initialState,
  name: 'submit',
  reducers: {
    onChangeSubmitStatus(state, { payload, type }: PayloadAction<boolean>) {
      state.submitStatus = payload;
    },
    onSubmit(state, { payload }: PayloadAction<SlideRowSubmission>) {
      if (!payload) {
        console.log(payload);
      }
    },
    onChangeAutoFillStatus(state, { payload }: PayloadAction<boolean>) {
      state.autoFillStatus = payload;
    },
  },
});

export default appFormStatus.reducer;

export const { onChangeSubmitStatus, onChangeAutoFillStatus } =
  appFormStatus.actions;
