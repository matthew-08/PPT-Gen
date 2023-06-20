/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FieldOptions,
  SlideState,
  Template,
  TemplateState,
  AddSlidePayload,
} from '../types';
import apiFetch from '../utils/apiFetch';
import { formatTemplateGet } from '../utils/formatResponse';
import { onChangeClearStatus, onChangeSubmitStatus } from './appFormSlice';

export const fetchAllTemplates = createAsyncThunk(
  'template/allTemplates',
  async () => {
    const res = await apiFetch({
      method: 'GET',
      route: '/api/templates',
    }).then((r) => r.json());
    return formatTemplateGet(res);
  }
);

const dummySlides = Array<SlideState>(30).fill({
  question: '',
  additional: '',
  answer: '',
});

type SubmittedSlides = {
  [slideIndex: number]: SlideState;
};

interface TemplateSliceState {
  loading: boolean;
  templates: TemplateState;
  dummySlides: null | SlideState[];
  submittedSlides: SubmittedSlides;
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
    templateId: 4,
    templateImg: '',
    validSubmit: false,
  },
  submittedSlides: {},
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
    onAddSlide(state, { payload }: PayloadAction<AddSlidePayload>) {
      const { slideIndex, slideState } = payload;
      state.submittedSlides[slideIndex] = slideState;
      const keys = Object.keys(state.submittedSlides);
      if (keys.length === state.selectedTemplate.slideAmount) {
        state.selectedTemplate.validSubmit = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTemplates.fulfilled, (state, action) => {
      state.templates = action.payload;
      state.loading = false;
    });
    builder.addCase(onChangeSubmitStatus, (state, action) => {
      if (action.payload === false) {
        state.selectedTemplate.validSubmit = false;
      }
    });
    builder.addCase(onChangeClearStatus, (state, action) => {
      if (action.payload) {
        state.submittedSlides = {};
      }
    });
  },
});

export const { onSelectTemplate, onSlideInputChange, onGetState, onAddSlide } =
  templateSlice.actions;

export default templateSlice.reducer;
