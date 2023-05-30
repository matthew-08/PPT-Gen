import { onSlideInputChange } from '../features/templateSlice';
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
  const handleInputChange = (value: string) => {
    dispatch(
      onSlideInputChange({
        field: fieldOption,
        slideIndex,
        input: value,
      })
    );
  };
  const inputValue = selectedTemplate.slides[slideIndex][fieldOption];

  return { handleInputChange, inputValue };
};

export default useFieldInput;
