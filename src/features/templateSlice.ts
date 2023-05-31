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
  selectedTemplate: Template;
}

const initialState: TemplateSliceState = {
  loading: true,
  templates: Array(4).fill({}),
  dummySlides,
  selectedTemplate: {
    loading: true,
    name: '',
    slideAmount: 28,
    slideFields: ['question', 'additional', 'answer'],
    templateId: 500,
    templateImg: '',
  },
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
      const selectedTemplate = state.templates.find(
        (t) => t.templateId === payload
      ) as Template;
      state.selectedTemplate = selectedTemplate;
    },
    onSlideInputChange(
      state,
      { payload }: PayloadAction<SlideInputChangePayload>
    ) {},
    onGetState(state, test) {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTemplates.fulfilled, (state, action) => {
      state.templates = action.payload;
      state.loading = false;
    });
  },
});

export const { onSelectTemplate, onSlideInputChange, onGetState } =
  templateSlice.actions;

export default templateSlice.reducer;
