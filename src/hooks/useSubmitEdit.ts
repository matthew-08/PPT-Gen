import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';

const useSubmitEdit = () => {
  const { submitStatus } = useAppSelector((state) => state.userTemplateReducer);

  useEffect(() => {
    if (submitStatus.ready) {
      console.log('Ready in hook');
    }
  }, [submitStatus.ready]);
  return {
    submitStatus,
  };
};

export default useSubmitEdit;
