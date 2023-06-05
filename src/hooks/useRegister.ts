import { useAppDispatch, useAppSelector } from '../store/hooks';

const useRegister = () => {
  const { authStatus } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
};

export default useRegister;
