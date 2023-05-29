import React from 'react';
import { useAppSelector } from '../store/hooks';

const useSelectedTemplate = () => {
  const selectedTemplateId = useAppSelector(
    (state) => state.templateReducer.selectedTemplate
  );

  const selectedTemplate = useAppSelector((state) =>
    state.templateReducer.templates.find(
      (t) => t.templateId === selectedTemplateId
    )
  );
  return { selectedTemplate };
};

export default useSelectedTemplate;
