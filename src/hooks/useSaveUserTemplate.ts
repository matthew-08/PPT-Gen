import { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import apiFetch from '../utils/apiFetch';
import useAuth from './useAuth';
import useSelectedTemplate from './useSelectedTemplate';

type Status = 'loading' | 'error' | 'complete' | 'idle';
const useSaveUserTemplate = () => {
  const { userInfo } = useAuth();
  const { submittedSlides: slideState } = useAppSelector(
    (state) => state.templateReducer
  );
  const { selectedTemplate } = useSelectedTemplate();
  const { name: templateName } = useAppSelector(
    (state) => state.downloadReducer
  );
  const [status, setStatus] = useState<Status>('idle');

  const handleSaveUserTemplate = async () => {
    if (!userInfo.authStatus || !userInfo.id) {
      setStatus('error');
    }
    setStatus(() => 'loading');
    const arrayOfSlides = Object.values(slideState);
    const res = await apiFetch({
      method: 'POST',
      route: `/api/users/${userInfo.id}/templates`,
      data: {
        templateId: selectedTemplate.templateId,
        templateInput: arrayOfSlides,
        name: templateName,
      },
    });
    if (!res.ok) {
      setStatus('error');
    } else {
      setStatus('complete');
    }
  };

  return { handleSaveUserTemplate, status };
};

export default useSaveUserTemplate;
