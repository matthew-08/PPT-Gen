import { useDisclosure } from '@chakra-ui/react';
import apiFetch from '../utils/apiFetch';
import useAuth from './useAuth';

const useDeleteTemplate = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    userInfo: { id: userId },
  } = useAuth();
  const handleOpenModal = () => {
    onOpen();
  };

  const handleDeleteTemplate = async (templateId: number) => {
    await apiFetch({
      method: 'DELETE',
      route: `/api/users/${userId}/templates/${templateId}`,
      data: {
        userId,
        templateId,
      },
    });
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
  };
};

export default useDeleteTemplate;
