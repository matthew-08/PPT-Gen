/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlideState } from '../types';

type SubmitState = {
  submitStatus: boolean;
  slideRows: SlideState[];
  autoFillStatus: boolean;
  clearFieldsStatus: boolean;
};

const initialState: SubmitState = {
  submitStatus: false,
  slideRows: [],
  autoFillStatus: false,
  clearFieldsStatus: false,
};

const appFormSlice = createSlice({
  initialState,
  name: 'submit',
  reducers: {
    onChangeSubmitStatus(state, { payload, type }: PayloadAction<boolean>) {
      state.submitStatus = payload;
    },
    onSubmit(state) {},
    onChangeAutoFillStatus(state, { payload }: PayloadAction<boolean>) {
      state.clearFieldsStatus = false;
      state.autoFillStatus = payload;
    },
    onChangeClearStatus(state, { payload }: PayloadAction<boolean>) {
      state.clearFieldsStatus = payload;
      state.autoFillStatus = false;
    },
  },
  extraReducers: (builder) => {},
});

export default appFormSlice.reducer;

export const {
  onChangeSubmitStatus,
  onChangeAutoFillStatus,
  onChangeClearStatus,
} = appFormSlice.actions;
