/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React, { HTMLInputTypeAttribute, useEffect } from 'react';
import { FieldValues, UseFormRegister, Path } from 'react-hook-form';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

type FieldInfo<FormData extends FieldValues> = {
  pHolderTxt: string;
  fieldName: Path<FormData>;
  inputType?: HTMLInputTypeAttribute | undefined;
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
  const { fieldName, isInvalid, pHolderTxt, register, errorMsg, inputType } =
    fieldInfo;
  useEffect(() => {
    console.log('input re-render');
  }, []);
  return (
    <FormControl isInvalid={isInvalid(fieldName)}>
      <Input
        placeholder={pHolderTxt}
        type={inputType || 'text'}
        size="lg"
        minW="100%"
        {...register(fieldName)}
      />
      <FormErrorMessage>{errorMsg as string}</FormErrorMessage>
    </FormControl>
  );
}
