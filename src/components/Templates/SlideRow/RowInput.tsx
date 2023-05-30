import { Input } from '@chakra-ui/react';
import { useEffect } from 'react';
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
      ml="1rem"
      maxW="300px"
      fontSize="1.4rem"
      padding="1.5rem"
      background="white"
      value={inputValue}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  );
}

export default RowInput;
