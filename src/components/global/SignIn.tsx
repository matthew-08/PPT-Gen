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
          <Flex flexDir="column" gap="1rem" minW="100%">
            <Input placeholder="Email" size="lg" minW="100%" />
            <Input placeholder="Password" size="lg" />
            <Text>
              Don't have an account?{' '}
              <Text as="span" color="blue.400">
                Sign up here.
              </Text>
            </Text>
          </Flex>
        </ModalBody>

        <ModalFooter as={Flex} width="100%" flexDir="column" gap="0.4rem">
          <Button colorScheme="purple" onClick={onClose} size="lg" width="100%">
            Test Account
          </Button>
          <Button variant="outline" colorScheme="purple" size="lg" width="100%">
            Sign In
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SignInModal;
