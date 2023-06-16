import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  Text,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

type Props = {
  modalState: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
};

function EditTemplateModal({ modalState }: Props) {
  const { isOpen, onClose, onOpen } = modalState;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            flexDir="column"
            m="auto"
            padding="1rem"
            maxH="800px"
            overflow="auto"
            className="slide-container"
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditTemplateModal;
