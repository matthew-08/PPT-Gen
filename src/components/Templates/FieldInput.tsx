import React, { memo } from 'react';
import { Input } from '@chakra-ui/react';
import { FieldOptions } from '../../pages/Home';

type Props = {
  field: FieldOptions;
  slideId: number;
  handleWriteToField: (
    tempalteId: number,
    field: FieldOptions,
    data: string
  ) => void;
};

export const FieldInput = memo(function FieldInput({
  field,
  slideId,
  handleWriteToField,
}: Props) {
  return (
    <Input
      key={slideId}
      fontSize="1.5rem"
      placeholder={field}
      onChange={(e) => handleWriteToField(slideId, field, e.target.value)}
      maxW="300px"
      padding="1.5rem"
      background="white"
    />
  );
});
