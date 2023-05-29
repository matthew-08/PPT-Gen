/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  FieldOptions,
  SlideState,
  Template,
  TemplateServerResponse,
  TemplateState,
} from '../types';
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
}

const initialState: TemplateSliceState = {
  loading: true,
  templates: Array(4).fill({}),
  dummySlides,
};

const templateSlice = createSlice({
  initialState,
  name: 'template',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTemplates.fulfilled, (state, action) => {
      state = {
        dummySlides: null,
        loading: false,
        templates: action.payload,
      };
    });
  },
});

export default templateSlice.reducer;
