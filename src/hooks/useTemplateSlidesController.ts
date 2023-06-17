import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { UserSlide } from '../types';
import apiFetch from '../utils/apiFetch';
import useAuth from './useAuth';

const useTemplateSlidesController = () => {
  const {
    userInfo: { id: userId },
  } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [slides, setSlides] = useState<UserSlide[]>([]);

  const handleFetchTemplateSlides = async (templateId: number) => {
    const slidesRes = (await apiFetch({
      method: 'GET',
      route: `/api/users/${userId}/templates/${templateId}/slides`,
    }).then((r) => r.json())) as UserSlide[];
    setSlides(slidesRes);
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
    slides,
  };
};

export default useTemplateSlidesController;
