import { useState } from 'react';
import { UserRegisterInput } from '../schemas/register.schema';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { attemptCreateUser } from '../features/authSlice';

const useRegister = () => {
  const { authStatus } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const [hasError, setHasError] = useState<boolean>(false);

  const handleAttemptRegister = (data: UserRegisterInput) => {
    dispatch(attemptCreateUser(data)).then((res) => {
      if (res.meta.requestStatus === 'rejected') {
        setHasError(true);
      }
    });
  };

  return { handleAttemptRegister, hasError };
};

export default useRegister;
