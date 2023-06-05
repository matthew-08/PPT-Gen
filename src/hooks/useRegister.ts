import { UserRegisterInput } from '../schemas/register.schema';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { attemptCreateUser } from '../features/authSlice';

const useRegister = () => {
  const { authStatus } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const handleAttemptRegister = (data: UserRegisterInput) => {
    console.log('register handler');
    dispatch(attemptCreateUser(data));
  };

  return { handleAttemptRegister };
};

export default useRegister;
