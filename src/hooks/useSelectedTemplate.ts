import { useState } from 'react';
import { useAppSelector } from '../store/hooks';
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
    submitStatus: boolean;
  };
};

export default useSelectedTemplate;
