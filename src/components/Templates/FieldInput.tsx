import React from 'react';
import { Input } from '@chakra-ui/react';
import { FieldOptions } from '../../pages/Home';

type Props = {
  field: FieldOptions;
  slideId: number;
};

export function FieldInput({ field, slideId }: Props) {
  return (
    <Input
      key={slideId}
      fontSize="1.5rem"
      placeholder={field}
      maxW="300px"
      padding="1.5rem"
      background="white"
    />
  );
}
