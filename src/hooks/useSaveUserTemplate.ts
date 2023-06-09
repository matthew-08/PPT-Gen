import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from './useAuth';

type Status = 'loading' | 'error' | 'complete' | 'idle';
const useSaveUserTemplate = () => {
  const { userInfo } = useAuth();
  const dispatch = useDispatch();
  const [status, setStatus] = useState<Status>('idle');

  const handleSaveUserTemplate = async () => {
    if (!userInfo.authStatus || !userInfo.id) {
      setStatus('error');
    }
    setStatus(() => 'loading');
    await setTimeout(() => {
      setStatus('complete');
    }, 2000);
  };

  return { handleSaveUserTemplate, status };
};

export default useSaveUserTemplate;
