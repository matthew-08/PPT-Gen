import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import {
  onChangeAutoFillStatus,
  onChangeSubmitStatus,
} from '../features/appFormSlice';
import { AddSlidePayload, SlideState } from '../types';
import { onAddSlide } from '../features/templateSlice';

const useAppFormStatus = () => {
  const dispatch = useDispatch();
  const { submitStatus, autoFillStatus } = useAppSelector(
    (state) => state.appFormStatusReducer
  );

  const handleSetSubmitStatus = (a: boolean) => {
    dispatch(onChangeSubmitStatus(a));
  };

  const handleSetAutoFillStatus = (a: boolean) => {
    dispatch(onChangeAutoFillStatus(a));
  };

  const handleAddSlide = (payload: AddSlidePayload) => {
    dispatch(onAddSlide(payload));
  };

  const handleSubmitSlide = (slide: AddSlidePayload | false) => {
    if (slide) {
      handleAddSlide(slide);
    }
  };

  const handleClearAllSlides = () => {};

  return {
    submitStatus,
    handleSetSubmitStatus,
    handleSetAutoFillStatus,
    autoFillStatus,
    handleSubmitSlide,
  };
};

export default useAppFormStatus;
