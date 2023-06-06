import { useAppDispatch } from '../store/hooks';
import useAuth from './useAuth';

const useRefreshSession = () => {
  const dispatch = useAppDispatch();
  const {
    userInfo: {
      authStatus: { loggedIn },
    },
  } = useAuth();

  const handleRefreshSession = () => {};
};

export default useRefreshSession;
