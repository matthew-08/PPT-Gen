import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  Text,
  Flex,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { UserSlide } from '../../../types';
import SlideRow from '../../Templates/SlideRow/SlideRow';

type Props = {
  modalState: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
  slides: UserSlide[];
};

function EditTemplateModal({ modalState, slides }: Props) {
  const { isOpen, onClose, onOpen } = modalState;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            flexDir="column"
            m="auto"
            padding="1rem"
            maxH="600px"
            overflow="auto"
            className="slide-container"
          >
            {slides.map((s, i) => {
              return (
                <SlideRow
                  key={s.id}
                  slide={s.fields}
                  slideIndex={i}
                  isUserField
                />
              );
            })}
          </Flex>
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
