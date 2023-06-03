import { useEffect, useState } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import { SlideFields, SlideRowState } from '../types';
import useAppFormStatus from './useAppFormStatus';

export type HookForm = {
  register: UseFormRegister<SlideRowState>;
  errors: FieldErrors<SlideRowState>;
};

const useSlideRow = (slideFields: SlideFields, slideIndex: number) => {
  const { submitStatus, autoFillStatus } = useAppFormStatus();
  const [disabled, setDisabled] = useState<boolean>(true);
  const {
    handleSubmit: hFormSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<SlideRowState>();
  const hookForm = {
    register,
    errors,
  };

  const handleAutoFill = () => {
    slideFields.map((slide) => {
      return setValue(slide, `${slide} - ${slideIndex + 1}`);
    });
  };

  const handleSubmit = async () => {
    setDisabled(true);
    const onvalid = () => console.log('valid');
    hFormSubmit(onvalid);
  };
  useEffect(() => {
    if (submitStatus) {
      handleSubmit();
    }
    if (autoFillStatus) {
      handleAutoFill();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitStatus, autoFillStatus]);

  return { hookForm, disabled, handleAutoFill };
};

export default useSlideRow;
