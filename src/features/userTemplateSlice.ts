/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store/store';
import {
  AddEditSlidePayload,
  PatchUserTemplateInput,
  UserTemplate,
} from '../types';
import apiFetch from '../utils/apiFetch';

type UserTemplatesState = {
  status: {
    loading: boolean;
    fetched: boolean;
    error: boolean;
  };
  templates: UserTemplate[];
  submittedSlides: AddEditSlidePayload[];
  currentEditingTemplate: UserTemplate | null;
  submitStatus: {
    ready: boolean;
    loading: boolean;
    complete: boolean;
  };
  slidesToSubmit: AddEditSlidePayload[];
};

export const fetchAllUserTemplates = createAsyncThunk<
  UserTemplate[],
  unknown,
  {
    state: RootState;
  }
>('userTemplates/allTemplates', async (e, { getState, rejectWithValue }) => {
  const userId = getState().authReducer.id;

  const res = await apiFetch({
    method: 'GET',
    route: `/api/users/${userId}/templates`,
  });
  if (!res.ok) {
    console.log('test');
  }
  return (await res.json()) as UserTemplate[];
});

export const patchUserTemplate = createAsyncThunk<
  void,
  PatchUserTemplateInput,
  {
    state: RootState;
  }
>(
  '/userTemplates/patchTemplates',
  async (input, { getState, rejectWithValue }) => {
    const userId = getState().authReducer.id;
    const res = await apiFetch({
      method: 'PATCH',
      route: `/api/users/${userId}/templates/${input.templateId}/slides`,
      data: input,
    });
    if (!res.ok) {
      rejectWithValue(null);
    }
  }
);

const initialState: UserTemplatesState = {
  status: {
    loading: false,
    error: false,
    fetched: false,
  },
  templates: [],
  submittedSlides: [],
  currentEditingTemplate: null,
  submitStatus: {
    ready: false,
    loading: false,
    complete: false,
  },
  slidesToSubmit: [],
};

const userTemplatesSlice = createSlice({
  name: 'userTemplates',
  initialState,
  reducers: {
    onSetCurrentEditingTemplate(state, { payload }: PayloadAction<number>) {
      const selectedTemplate = state.templates.find(({ id }) => id === payload);
      state.currentEditingTemplate = selectedTemplate as UserTemplate;
    },
    onSubmitEditSlides(state, { payload }: PayloadAction<AddEditSlidePayload>) {
      state.submittedSlides.push(payload);
      if (
        state.currentEditingTemplate &&
        state.currentEditingTemplate.templateInfo.slideAmount ===
          state.submittedSlides.length
      ) {
        const slidesToSubmit = state.submittedSlides.filter(
          ({ hasBeenEdited }) => hasBeenEdited
        );
        state.slidesToSubmit = slidesToSubmit;
        state.submitStatus.ready = true;
      }
    },
    onCloseEditModal(state, { payload }) {
      const { templates } = state;
      state = {
        ...initialState,
        templates,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUserTemplates.fulfilled, (state, action) => {
      state.templates = action.payload;
    });
    builder.addCase(patchUserTemplate.pending, (state, action) => {
      state.submitStatus.loading = true;
    });
    builder.addCase(patchUserTemplate.fulfilled, (state, action) => {
      state.submitStatus = {
        loading: false,
        complete: true,
        ready: false,
      };
    });
  },
});

export const {
  onSubmitEditSlides,
  onSetCurrentEditingTemplate,
  onCloseEditModal,
} = userTemplatesSlice.actions;

export default userTemplatesSlice.reducer;
