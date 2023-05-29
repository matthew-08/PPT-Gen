import { Input } from '@chakra-ui/react';
import { FieldOptions } from '../../../types';

type Props = {
  field: FieldOptions;
  handleInputChange: (str: string, field: FieldOptions) => void;
};

function RowInput({ field, handleInputChange }: Props) {
  return (
    <Input
      placeholder={field}
      onChange={(e) => handleInputChange(e.target.value, field)}
    />
  );
}

export default RowInput;
