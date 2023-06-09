/* eslint-disable react/jsx-props-no-spreading */
import { Input } from '@chakra-ui/react';
import { memo } from 'react';
import { HookForm } from '../../../hooks/useSlideRow';
import { FieldOptions } from '../../../types';

type Props = {
  field: FieldOptions;
  slideIndex: number;
  hookForm: HookForm;
};

const RowInput = memo(function RowInput({ field, hookForm }: Props) {
  const { errors, register } = hookForm;
  const isInvalid = field in errors;
  return (
    <Input
      ml="1rem"
      maxW="300px"
      fontSize="1.4rem"
      borderColor={isInvalid ? 'red.400' : ''}
      padding="1.5rem"
      maxLength={50}
      background="white"
      {...register(field, { required: true })}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
    />
  );
});

export default RowInput;
