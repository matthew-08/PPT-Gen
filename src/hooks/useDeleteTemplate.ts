import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { onDeleleteTemplate } from '../features/userTemplateSlice';
import { useAppDispatch } from '../store/hooks';
import apiFetch from '../utils/apiFetch';
import useAuth from './useAuth';

const useDeleteTemplate = () => {
  const dispatch = useAppDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [loadingStatus, setLoadingStatus] = useState<'loading' | 'idle'>(
    'idle'
  );
  const {
    userInfo: { id: userId },
  } = useAuth();
  const handleOpenModal = () => {
    onOpen();
  };

  const handleDeleteTemplate = async (templateId: number) => {
    setLoadingStatus('loading');
    const res = await apiFetch({
      method: 'DELETE',
      route: `/api/users/${userId}/templates/${templateId}`,
      data: {
        userId,
        templateId,
      },
    });
    if (res) {
      dispatch(onDeleleteTemplate(templateId));
      setLoadingStatus('idle');
      onClose();
    }
  };

  return {
    deleteModalState: {
      isOpen,
      onClose,
      onOpen,
    },
    handlers: {
      handleOpenModal,
      handleDeleteTemplate,
    },
    loadingStatus,
  };
};

export default useDeleteTemplate;
