import { useDisclosure } from '@chakra-ui/react';
import apiFetch from '../utils/apiFetch';
import useAuth from './useAuth';

const useTemplateSlidesController = () => {
  const {
    userInfo: { id: userId },
  } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleFetchTemplateSlides = async (templateId: number) => {
    await apiFetch({
      method: 'GET',
      route: `/api/users/${userId}/templates/${templateId}/slides`,
    })
      .then((r) => r.json())
      .then((r) => console.log(r));
  };
  const handleEditTemplate = async (templateId: number) => {
    handleFetchTemplateSlides(templateId);
    onOpen();
  };

  return {
    handlers: {
      handleFetchTemplateSlides,
      handleEditTemplate,
    },
    modalState: {
      isOpen,
      onClose,
      onOpen,
    },
  };
};

export default useTemplateSlidesController;
