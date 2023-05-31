import React, { useEffect } from 'react';
import { onGetState } from '../features/templateSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Template } from '../types';

const useSelectedTemplate = () => {
  const selectedTemplateId = useAppSelector(
    (state) => state.templateReducer.selectedTemplate
  );

  const selectedTemplate = useAppSelector(
    (state) => state.templateReducer.selectedTemplate
  );

  return { selectedTemplate } as { selectedTemplate: Template };
};

export default useSelectedTemplate;
