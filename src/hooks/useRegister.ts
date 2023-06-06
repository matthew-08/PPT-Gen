import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRegisterInput } from '../schemas/register.schema';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { attemptCreateUser } from '../features/authSlice';

const useRegister = () => {
  const navigate = useNavigate();
  const { authStatus } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const [hasError, setHasError] = useState<boolean>(false);

  const handleAttemptRegister = (data: UserRegisterInput) => {
    dispatch(attemptCreateUser(data)).then((res) => {
      if (res.meta.requestStatus === 'rejected') {
        setHasError(true);
      } else if (res.meta.requestStatus === 'fulfilled') {
        console.log(res.payload);
        navigate('/');
      }
    });
  };

  return { handleAttemptRegister, hasError, setHasError };
};

export default useRegister;
