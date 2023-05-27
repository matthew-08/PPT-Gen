/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import { FieldValues, UseFormRegister, Path } from 'react-hook-form';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

type FieldInfo<FormData extends FieldValues> = {
  pHolderTxt: string;
  fieldName: Path<FormData>;
  isInvalid: (k: keyof FormData) => boolean;
  errorMsg?: string;
  register: UseFormRegister<FormData>;
};

type Props<FormData extends FieldValues> = {
  fieldInfo: FieldInfo<FormData>;
};

export function FormInput<FormData extends FieldValues>({
  fieldInfo,
}: Props<FormData>) {
  const { fieldName, isInvalid, pHolderTxt, register, errorMsg } = fieldInfo;
  return (
    <FormControl isInvalid={isInvalid(fieldName)}>
      <Input
        placeholder="Email"
        size="lg"
        minW="100%"
        {...register(fieldName)}
      />
      <FormErrorMessage>{errorMsg}</FormErrorMessage>
    </FormControl>
  );
}
