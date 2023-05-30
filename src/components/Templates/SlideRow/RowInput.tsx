import { Input } from '@chakra-ui/react';
import useFieldInput from '../../../hooks/useFieldInput';
import useSelectedTemplate from '../../../hooks/useSelectedTemplate';
import { FieldOptions } from '../../../types';

type Props = {
  field: FieldOptions;
  slideIndex: number;
};

function RowInput({ field, slideIndex }: Props) {
  const { handleInputChange, inputValue } = useFieldInput({
    fieldOption: field,
    slideIndex,
  });
  return (
    <Input
      value={inputValue}
      placeholder={field}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  );
}

export default RowInput;
