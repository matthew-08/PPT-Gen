import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FieldOptions, TemplateServerResponse, TemplateState } from '../types';

export const fetchAllTemplates = createAsyncThunk(
  'template/allTemplates',
  async () => {
    await fetch('http://localhost:3005/api/template')
      .then((res) => res.json())
      .then((res: TemplateServerResponse) => console.log(res));
  }
);
