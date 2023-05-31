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

  const [slideForm, setSlideForm] = useState(formObj);

  const handleChange = (field: FieldOptions, value: string) => {
    setSlideForm({
      ...slideForm,
      [field]: value,
    });
  };
  return { handleChange, slideForm };
};

export default useSlideRow;
