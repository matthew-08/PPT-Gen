import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import {
  onChangeAutoFillStatus,
  onChangeSubmitStatus,
} from '../features/appFormStatus';

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

  return {
    submitStatus,
    handleSetSubmitStatus,
    handleSetAutoFillStatus,
    autoFillStatus,
  };
};

export default useAppFormStatus;
