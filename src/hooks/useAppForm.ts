import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import {
  onChangeAutoFillStatus,
  onChangeClearStatus,
  onChangeEditTemplateStatus,
  onChangeSubmitStatus,
} from '../features/appFormSlice';
import { AddEditSlidePayload, AddSlidePayload } from '../types';
import { onAddSlide } from '../features/templateSlice';
import { onSubmitEditSlides } from '../features/userTemplateSlice';

const useAppFormStatus = () => {
  const dispatch = useDispatch();
  const { submitStatus, autoFillStatus, clearFieldsStatus, editSubmitStatus } =
    useAppSelector((state) => state.appFormStatusReducer);

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

  const handleClearAllSlides = () => {
    dispatch(onChangeClearStatus(true));
  };

  const handleSetEditSubmitStatus = (a: boolean) => {
    dispatch(onChangeEditTemplateStatus(a));
  };

  const handleSubmitEditSlide = (slide: AddEditSlidePayload) => {
    dispatch(onSubmitEditSlides(slide));
  };

  const handlers = {
    handleAddSlide,
    handleClearAllSlides,
    handleSetAutoFillStatus,
    handleSubmitSlide,
    handleSetSubmitStatus,
    handleSetEditSubmitStatus,
    handleSubmitEditSlide,
  };
  return {
    submitStatus,
    autoFillStatus,
    clearFieldsStatus,
    editSubmitStatus,
    handlers,
  };
};

export default useAppFormStatus;
