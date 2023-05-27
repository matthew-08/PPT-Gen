import {
  Button,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Modal,
  UseDisclosureReturn,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import RegisterForm from '../Register/RegisterForm';
import SignInForm from './SignInForm';

type Props = {
  [K in keyof UseDisclosureReturn as K extends 'isOpen' | 'onOpen' | 'onClose'
    ? K
    : never]: UseDisclosureReturn[K];
};

function SignInModal({ isOpen, onOpen, onClose }: Props) {
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
          <ModalHeader fontSize="3rem">Sign In</ModalHeader>
          <SignInForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SignInModal;