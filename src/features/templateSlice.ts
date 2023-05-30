/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FieldOptions, SlideState, Template, TemplateState } from '../types';
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
  selectedTemplate: 4,
};

type SlideInputChangePayload = {
  slideIndex: number;
  field: FieldOptions;
  input: string;
};

const templateSlice = createSlice({
  initialState,
  name: 'template',
  reducers: {
    onSelectTemplate(state, { payload, type }: PayloadAction<number>) {
      state.selectedTemplate = payload;
    },
    onSlideInputChange(
      state,
      { payload }: PayloadAction<SlideInputChangePayload>
    ) {
      const { field, input, slideIndex } = payload;
      const templateId = state.selectedTemplate;
      const template = state.templates.find(
        (t) => t.templateId === templateId
      ) as Template;
      const before = template.slides;
      template.slides[slideIndex][field] = input;
      const after = template.slides;
      console.log(before === after);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTemplates.fulfilled, (state, action) => {
      state.templates = action.payload;
      state.loading = false;
    });
  },
});

export const { onSelectTemplate, onSlideInputChange } = templateSlice.actions;

export default templateSlice.reducer;
