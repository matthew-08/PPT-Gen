import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnyZodObject, ZodSchema } from 'zod';
import { HTMLInputTypeAttribute } from 'react';
import { generateFormInputs } from '../utils/generateFormInputs';

type InputInfo<FormData> = {
  placeholder: string;
  fieldName: keyof FormData;
  inputType?: HTMLInputTypeAttribute;
}[];

const useCustomForm = <FormData extends Record<any, any>>(
  inputInfo: InputInfo<FormData>,
  zodSchema: ZodSchema
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(zodSchema),
  });

  const fieldHasError = (k: keyof FormData) => k in errors;
  const inputObjects = generateFormInputs<FormData>({
    inputInfo,
    errors,
    isInvalid: fieldHasError,
    register,
  });

  return { inputObjects, handleSubmit };
};

export default useCustomForm;
