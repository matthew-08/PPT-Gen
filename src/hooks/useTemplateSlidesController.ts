import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import {
  onCloseEditModal,
  onSetCurrentEditingTemplate,
} from '../features/userTemplateSlice';
import { useAppDispatch } from '../store/hooks';
import { UserSlide } from '../types';
import apiFetch from '../utils/apiFetch';
import sortUserSlidesResponse from '../utils/sortSlides';
import useAppFormStatus from './useAppForm';
import useAuth from './useAuth';

const useTemplateSlidesController = () => {
  const dispatch = useAppDispatch();
  const {
    userInfo: { id: userId },
  } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [slides, setSlides] = useState<UserSlide[]>([]);
  const {
    handlers: { handleSetEditSubmitStatus },
  } = useAppFormStatus();
  const handleFetchTemplateSlides = async (templateId: number) => {
    const slidesRes = (await apiFetch({
      method: 'GET',
      route: `/api/users/${userId}/templates/${templateId}/slides`,
    }).then((r) => r.json())) as UserSlide[];
    const sortedSlides = sortUserSlidesResponse(slidesRes);
    setSlides(sortedSlides);
  };
  const handleEditTemplate = async (templateId: number) => {
    handleFetchTemplateSlides(templateId);
    dispatch(onSetCurrentEditingTemplate(templateId));
    onOpen();
  };

  const handleCloseModal = () => {
    dispatch(onCloseEditModal());
    handleSetEditSubmitStatus(false);
    onClose();
  };

  return {
    handlers: {
      handleFetchTemplateSlides,
      handleEditTemplate,
    },
    modalState: {
      isOpen,
      onClose: handleCloseModal,
      onOpen,
    },
    slides,
  };
};

export default useTemplateSlidesController;
