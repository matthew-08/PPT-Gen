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
  const {
    submitStatus,
    autoFillStatus,
    handleSubmitSlide,
    handleSetSubmitStatus,
  } = useAppFormStatus();
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
    const onValid = (slideState: SlideState) =>
      handleSubmitSlide({
        slideState,
        slideIndex,
      });
    const onInvalid = () => {
      handleSetSubmitStatus(false);
    };
    hFormSubmit(onValid, onInvalid)();
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
