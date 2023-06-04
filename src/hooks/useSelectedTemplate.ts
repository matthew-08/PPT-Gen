import { useAppSelector } from '../store/hooks';
import { FieldOptions, Template } from '../types';

const useSelectedTemplate = () => {
  const selectedTemplate = useAppSelector(
    (state) => state.templateReducer.selectedTemplate
  );
  const { slideAmount, slideFields } = selectedTemplate;

  const slides = Array(slideAmount).fill(slideFields) as FieldOptions[][];

  return { selectedTemplate, slides };
};

export default useSelectedTemplate;
