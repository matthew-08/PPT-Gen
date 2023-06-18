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
  currentEditingTemplate: UserTemplate;
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
  async ({ templateId, updatedSlides }, { getState }) => {
    const userId = getState().authReducer.id;
    apiFetch({
      method: 'PATCH',
      route: `/api/users/${userId}/templates/${templateId}/slides`,
    });
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
};

const userTemplatesSlice = createSlice({
  name: 'userTemplates',
  initialState,
  reducers: {
    onSetCurrentEditingTemplate(state, { payload }) {},
    onSubmitEditSlides(state, { payload }: PayloadAction<AddEditSlidePayload>) {
      state.submittedSlides.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUserTemplates.fulfilled, (state, action) => {
      state.templates = action.payload;
    });
  },
});

export const { onSubmitEditSlides } = userTemplatesSlice.actions;

export default userTemplatesSlice.reducer;
