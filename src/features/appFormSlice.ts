/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { onSelectTemplate } from './templateSlice';
import { SlideRowState, SlideState } from '../types';

type SubmitState = {
  submitStatus: boolean;
  slideRows: SlideState[];
  autoFillStatus: boolean;
  selectedTemplate: number;
};

const initialState: SubmitState = {
  submitStatus: false,
  slideRows: [],
  autoFillStatus: false,
  selectedTemplate: 1,
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
      state.autoFillStatus = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(onSelectTemplate, (state, action) => {
      state.selectedTemplate = action.payload;
    });
  },
});

export default appFormSlice.reducer;

export const { onChangeSubmitStatus, onChangeAutoFillStatus } =
  appFormSlice.actions;
