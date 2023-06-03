/* eslint-disable react/jsx-props-no-spreading */
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import { HookForm } from '../../../hooks/useSlideRow';
import useSubmit from '../../../hooks/useSubmit';
import { FieldOptions } from '../../../types';

type Props = {
  field: FieldOptions;
  slideIndex: number;
  handleChange: (field: FieldOptions, value: string) => void;
  value: string;
  hookForm: HookForm;
};

const RowInput = memo(function RowInput({
  field,
  slideIndex,
  hookForm,
  handleChange,
  value,
}: Props) {
  const { errors, register } = hookForm;
  const isInvalid = field in errors;
  useEffect(() => {
    console.log('ROW INPUT RERENDER');
  }, []);
  return (
    <Input
      ml="1rem"
      maxW="300px"
      fontSize="1.4rem"
      borderColor={isInvalid ? 'red.400' : ''}
      padding="1.5rem"
      maxLength={30}
      background="white"
      {...register(field, { required: true })}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
    />
  );
});

export default RowInput;
