import React, { useEffect } from 'react';
import { onGetState } from '../features/templateSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { FieldOptions, Template } from '../types';

const useSelectedTemplate = () => {
  const selectedTemplate = useAppSelector(
    (state) => state.templateReducer.selectedTemplate
  );
  const { slideAmount, slideFields } = selectedTemplate;

  const slides = Array(slideAmount).fill(slideFields);

  return { selectedTemplate, slides } as {
    selectedTemplate: Template;
    slides: FieldOptions[][];
  };
};

export default useSelectedTemplate;
