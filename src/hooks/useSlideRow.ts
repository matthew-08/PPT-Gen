import { useEffect, useState } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import { SlideFields, SlideRowState, SlideState, UserField } from '../types';
import useAppFormStatus from './useAppForm';

export type HookForm = {
  register: UseFormRegister<SlideRowState>;
  errors: FieldErrors<SlideRowState>;
};

const useSlideRow = (
  slideFields: SlideFields | UserField[],
  slideIndex: number,
  editOptions?: {
    isUserField: boolean;
    slideId: number | null;
  }
) => {
  const {
    submitStatus,
    autoFillStatus,
    clearFieldsStatus,
    editSubmitStatus,
    handlers,
  } = useAppFormStatus();
  const [hasBeenEdited, setHasBeenEdited] = useState<boolean>(false);

  const {
    handleSubmit: hFormSubmit,
    register,
    setValue,
    reset,
    formState: { errors, isDirty },
  } = useForm<SlideRowState>({
    shouldFocusError: false,
  });
  const hookForm = {
    register,
    errors,
  };

  useEffect(() => {
    if (editOptions?.isUserField) {
      slideFields.map((f) => {
        if (typeof f !== 'string') {
          setValue(f.fieldType.type, f.content);
        }
        return f;
      });
    }
  }, [slideFields]);

  const handleAutoFill = () => {
    slideFields.map((slide) => {
      if (typeof slide === 'string') {
        return setValue(slide, `${slide} - ${slideIndex + 1}`);
      }
      return slide;
    });
  };

  const handleSubmit = async () => {
    const onValid = (slideState: SlideState) => {
      if (editSubmitStatus) {
        handlers.handleSubmitEditSlide({
          hasBeenEdited,
          slideIndex,
          slideState,
        });
      } else {
        handlers.handleSubmitSlide({
          slideState,
          slideIndex,
        });
      }
    };
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
    if (editSubmitStatus) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitStatus, autoFillStatus, clearFieldsStatus, editSubmitStatus]);

  useEffect(() => {
    if (isDirty) {
      setHasBeenEdited(true);
    }
  }, [isDirty]);

  return { hookForm, handleAutoFill };
};

export default useSlideRow;
