import { useEffect, useState } from 'react';
import { SlideFields, SlideState, FieldOptions } from '../types';

type SlideRowState = {
  [K in FieldOptions as K extends 'question' ? never : K]?: string;
} & {
  question: string;
};

const useSlideRow = (slideFields: SlideFields, slideIndex: number) => {
  const formObj: SlideRowState = slideFields.reduce((acc: SlideRowState, k) => {
    acc[k] = '';
    return acc;
  }, {} as SlideRowState);

  const [form, setForm] = useState(formObj);

  const handleChange = (field: FieldOptions, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  return { handleChange, form };
};

export default useSlideRow;
