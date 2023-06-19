import { useDisclosure } from '@chakra-ui/react';

const useDeleteTemplate = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleOpenModal = () => {
    onOpen();
  };

  const handleDeleteTemplate = () => {};

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
