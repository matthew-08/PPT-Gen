import { Input } from '@chakra-ui/react';
import { useEffect, memo } from 'react';
import useFieldInput from '../../../hooks/useFieldInput';
import useSelectedTemplate from '../../../hooks/useSelectedTemplate';
import { FieldOptions } from '../../../types';

type Props = {
  field: FieldOptions;
  slideIndex: number;
  handleChange: (field: FieldOptions, value: string) => void;
  value: string;
};

const RowInput = memo(function RowInput({
  field,
  slideIndex,
  handleChange,
  value,
}: Props) {
  return (
    <Input
      ml="1rem"
      maxW="300px"
      fontSize="1.4rem"
      padding="1.5rem"
      background="white"
      value={value}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
      onChange={(e) => handleChange(field, e.target.value)}
    />
  );
});

export default RowInput;
