import React from 'react';
import { useAppSelector } from '../store/hooks';
import { Template } from '../types';

const useSelectedTemplate = () => {
  const selectedTemplateId = useAppSelector(
    (state) => state.templateReducer.selectedTemplate
  );

  const selectedTemplate = useAppSelector((state) =>
    state.templateReducer.templates.find(
      (t) => t.templateId === selectedTemplateId
    )
  );
  return { selectedTemplate } as { selectedTemplate: Template };
};

export default useSelectedTemplate;
