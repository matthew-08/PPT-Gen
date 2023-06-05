import { useEffect, useState } from 'react';
import { attemptCreateSession } from '../features/authSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CreateSessionInput } from '../types';

const useAuth = () => {
  const { authStatus, id } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const [error, setError] = useState<null | string>(null);

  const handleCreateSession = (data: CreateSessionInput) => {
    return dispatch(attemptCreateSession(data)).then((r) => {
      if (r.meta.requestStatus === 'rejected') {
        setError(error);
      }
    });
  };

  useEffect(() => {
    console.log(error);
  }, [error]);
  const userInfo = {
    authStatus,
    id,
  };

  return { userInfo, handleCreateSession };
};

export default useAuth;
