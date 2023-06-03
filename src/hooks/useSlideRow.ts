import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import SlideRowSchema from '../schemas/slideRow.schema';
import { SlideFields, FieldOptions, SlideRowState } from '../types';
import useSubmit from './useSubmit';

export type HookForm = {
  register: UseFormRegister<SlideRowState>;
  errors: FieldErrors<SlideRowState>;
};

const useSlideRow = (slideFields: SlideFields, slideIndex: number) => {
  const { submitStatus, handleSetSubmitStatus } = useSubmit();
  const formObj: SlideRowState = slideFields.reduce((acc: SlideRowState, k) => {
    acc[k] = '';
    return acc;
  }, {} as SlideRowState);
  const [slideForm, setSlideForm] = useState(formObj);

  const {
    handleSubmit: hFormSubmit,
    register,
    getFieldState,
    formState: { errors },
  } = useForm<SlideRowState>();

  const hookForm = {
    register,
    errors,
  };

  const handleSubmit = () => {
    const onvalid = () => console.log('valid');
    hFormSubmit(onvalid)();
  };
  useEffect(() => {
    if (submitStatus) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitStatus]);

  const handleChange = (field: FieldOptions, value: string) => {
    setSlideForm({
      ...slideForm,
      [field]: value,
    });
  };
  return { handleChange, slideForm, hookForm };
};

export default useSlideRow;
