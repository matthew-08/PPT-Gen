/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlideState } from '../types';

type SubmitState = {
  submitStatus: boolean;
  slideRows: SlideState[];
  autoFillStatus: boolean;
  clearFieldsStatus: boolean;
  editSubmitStatus: boolean;
};

const initialState: SubmitState = {
  submitStatus: false,
  slideRows: [],
  autoFillStatus: false,
  clearFieldsStatus: false,
  editSubmitStatus: false,
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
    onChangeEditTemplateStatus(state, { payload }: PayloadAction<boolean>) {
      state.editSubmitStatus = payload;
    },
  },
  extraReducers: (builder) => {},
});

export default appFormSlice.reducer;

export const {
  onChangeSubmitStatus,
  onChangeAutoFillStatus,
  onChangeClearStatus,
  onChangeEditTemplateStatus,
} = appFormSlice.actions;
