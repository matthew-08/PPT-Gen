import { attemptRefreshSession } from '../features/authSlice';
import { useAppDispatch } from '../store/hooks';
import useAuth from './useAuth';

const useRefreshSession = () => {
  const dispatch = useAppDispatch();
  const {
    userInfo: {
      authStatus: { loggedIn },
    },
  } = useAuth();

  const handleRefreshSession = () => {
    if (!loggedIn) {
      dispatch(attemptRefreshSession());
    }
  };

  return { handleRefreshSession };
};

export default useRefreshSession;
