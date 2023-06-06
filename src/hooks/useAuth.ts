import { useEffect, useState } from 'react';
import { attemptCreateSession } from '../features/authSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CreateSessionInput } from '../types';

const useAuth = () => {
  const { authStatus, id } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const [error, setError] = useState<boolean>(false);

  const handleCreateSession = (data: CreateSessionInput) => {
    return dispatch(attemptCreateSession(data)).then((r) => {
      if (r.meta.requestStatus === 'rejected') {
        setError(true);
      } else {
        console.log('test');
      }
    });
  };
  const handleSetErrorState = (b: boolean) => {
    return setError(b);
  };
  const userInfo = {
    authStatus,
    id,
  };
  const errorState = {
    error,
    handleSetErrorState,
  };

  return { userInfo, handleCreateSession, errorState };
};

export default useAuth;
