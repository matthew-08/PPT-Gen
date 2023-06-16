import { useEffect, useState } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import {
  EditFieldOptions,
  SlideFields,
  SlideRowState,
  SlideState,
} from '../types';
import useAppFormStatus from './useAppForm';

export type HookForm = {
  register: UseFormRegister<SlideRowState>;
  errors: FieldErrors<SlideRowState>;
};

const useSlideRow = (
  slideFields: SlideFields | EditFieldOptions[],
  slideIndex: number,
  editOptions?: {}
) => {
  const { submitStatus, autoFillStatus, clearFieldsStatus, handlers } =
    useAppFormStatus();

  const {
    handleSubmit: hFormSubmit,
    register,
    setValue,
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
