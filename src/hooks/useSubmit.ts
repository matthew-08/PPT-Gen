import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onChangeSubmitStatus } from '../features/submitSlice';
import { useAppSelector } from '../store/hooks';

const useSubmit = () => {
  const dispatch = useDispatch();
  const { submitStatus } = useAppSelector((state) => state.submitReducer);

  const handleSetSubmitStatus = (a: boolean) => {
    dispatch(onChangeSubmitStatus(a));
  };

  const handleSubmittedSlide = () => {};

  return { submitStatus, handleSetSubmitStatus };
};

export default useSubmit;
