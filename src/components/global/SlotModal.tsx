import {
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Modal,
  UseDisclosureReturn,
  Flex,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  disclosureState: {
    [K in keyof UseDisclosureReturn as K extends 'isOpen' | 'onOpen' | 'onClose'
      ? K
      : never]: UseDisclosureReturn[K];
  };
  modalHeader: string;
  children: ReactNode;
};

function SlotModal({ disclosureState, modalHeader, children }: Props) {
  const { isOpen, onClose, onOpen } = disclosureState;
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent borderRadius="20px">
        <ModalCloseButton />
        <ModalBody
          as={Flex}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <ModalHeader fontSize="3rem">{modalHeader}</ModalHeader>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SlotModal;
