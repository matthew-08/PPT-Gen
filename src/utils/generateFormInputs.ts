import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type Props<FormData extends FieldValues> = {
  inputInfo: {
    placeholder: string;
    fieldName: keyof FormData;
  }[];
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  isInvalid: (f: keyof FormData) => boolean;
};

const generateFormInputs = <FormData extends FieldValues>(
  data: Props<FormData>
) => {
  const { register, errors, isInvalid } = data;
  return data.inputInfo.map((i) => {
    return {
      fieldName: i.fieldName,
      register,
      isInvalid,
      pHolderTxt: i.placeholder,
      errorMsg: errors[i.fieldName]?.message,
    };
  });
};

export { generateFormInputs };
