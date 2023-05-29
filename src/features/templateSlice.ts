/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlideState, TemplateState } from '../types';
import { formatTemplateGet } from '../utils/formatResponse';

export const fetchAllTemplates = createAsyncThunk(
  'template/allTemplates',
  async () => {
    const response = await fetch('http://localhost:3005/api/template').then(
      (res) => res.json()
    );
    return formatTemplateGet(response);
  }
);

const dummySlides = Array<SlideState>(30).fill({
  question: '',
  additional: '',
  answer: '',
});

interface TemplateSliceState {
  loading: boolean;
  templates: TemplateState;
  dummySlides: null | SlideState[];
  selectedTemplate: number;
}

const initialState: TemplateSliceState = {
  loading: true,
  templates: Array(4).fill({}),
  dummySlides,
  selectedTemplate: 1,
};

const templateSlice = createSlice({
  initialState,
  name: 'template',
  reducers: {
    onSelectTemplate(state, { payload, type }: PayloadAction<number>) {
      console.log('test');
      state.selectedTemplate = payload;
      console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTemplates.fulfilled, (state, action) => {
      state.templates = action.payload;
      state.loading = false;
    });
  },
});

export const { onSelectTemplate } = templateSlice.actions;

export default templateSlice.reducer;
