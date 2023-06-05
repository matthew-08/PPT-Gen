import { useEffect, useState } from 'react';
import {
  FieldErrors,
  useForm,
  UseFormRegister,
  SubmitErrorHandler,
} from 'react-hook-form';
import { SlideFields, SlideRowState, SlideState } from '../types';
import useAppFormStatus from './useAppForm';

export type HookForm = {
  register: UseFormRegister<SlideRowState>;
  errors: FieldErrors<SlideRowState>;
};

const useSlideRow = (slideFields: SlideFields, slideIndex: number) => {
  const { submitStatus, autoFillStatus, clearFieldsStatus, handlers } =
    useAppFormStatus();

  const {
    handleSubmit: hFormSubmit,
    register,
    setValue,
    resetField,
    getValues,
    reset,
    formState: { errors },
  } = useForm<SlideRowState>({
    shouldFocusError: false,
  });
  const hookForm = {
    register,
    errors,
  };

  const handleAutoFill = () => {
    console.log('mapping slideFields');
    console.log(slideFields);
    slideFields.map((slide) => {
      return setValue(slide, `${slide} - ${slideIndex + 1}`);
    });
  };

  const handleSubmit = async () => {
    const onValid = (slideState: SlideState) =>
      handlers.handleSubmitSlide({
        slideState,
        slideIndex,
      });
    const onInvalid = () => {
      handlers.handleSetSubmitStatus(false);
    };
    hFormSubmit(onValid, onInvalid)();
  };
  const handleClearFields = () => {
    reset(
      {
        additional: '',
        answer: '',
        question: '',
      },
      {
        keepErrors: true,
      }
    );
  };
  useEffect(() => {
    if (submitStatus) {
      handleSubmit();
    }
    if (autoFillStatus) {
      console.log('auto fill');
      handleAutoFill();
    }
    if (clearFieldsStatus) {
      handleClearFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitStatus, autoFillStatus, clearFieldsStatus]);

  return { hookForm, handleAutoFill };
};

export default useSlideRow;
