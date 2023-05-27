import {
  Button,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Modal,
  ModalFooter,
  UseDisclosureReturn,
  Slide,
  Fade,
  Flex,
  Text,
  Input,
} from '@chakra-ui/react';
import { Sign } from 'crypto';
import { useState } from 'react';
import RegisterForm from '../Register/RegisterForm';
import SignInForm from './SignInForm';

type Props = {
  [K in keyof UseDisclosureReturn as K extends 'isOpen' | 'onOpen' | 'onClose'
    ? K
    : never]: UseDisclosureReturn[K];
};

function SignInModal({ isOpen, onOpen, onClose }: Props) {
  const [registerForm, setRegisterForm] = useState<boolean>(false);
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
          {registerForm ? (
            <RegisterForm />
          ) : (
            <SignInForm toggleRegisterForm={setRegisterForm} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SignInModal;
