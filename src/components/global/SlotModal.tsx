/* eslint-disable react/require-default-props */
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
  options?: {
    disableOverlayClick: boolean;
    disableCloseButton: boolean;
  };
};

function SlotModal({ disclosureState, modalHeader, children, options }: Props) {
  const { isOpen, onClose, onOpen } = disclosureState;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={options?.disableOverlayClick || true}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent borderRadius="20px">
        <ModalCloseButton disabled={options?.disableCloseButton || false} />
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
