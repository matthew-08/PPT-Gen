import { useAppDispatch } from '../store/hooks';
import { FieldOptions } from '../types';
import useSelectedTemplate from './useSelectedTemplate';

const useFieldInput = (inputInfo: {
  slideIndex: number;
  fieldOption: FieldOptions;
}) => {
  const { slideIndex, fieldOption } = inputInfo;
  const dispatch = useAppDispatch();
  const { selectedTemplate } = useSelectedTemplate();
  const handleInputChange = () => {};
  const inputValue = selectedTemplate.slides[slideIndex][fieldOption];

  return { handleInputChange, inputValue };
};

export default useFieldInput;
