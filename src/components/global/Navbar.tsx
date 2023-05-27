import React from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  useDisclosure,
  Slide,
} from '@chakra-ui/react';
import CustomList from './CustomList';
import SignInModal from './SignIn';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      width="100%"
      px="3rem"
      py="1rem"
      justify="space-between"
      align="center"
      background="purple.700"
    >
      <Heading fontSize="6xl" color="purple.50" fontWeight="bold">
        PPTGen
      </Heading>
      <Flex as="nav" align="center">
        <CustomList
          listItems={[
            ['About', 'github.com'],
            ['Contact', 'github.com'],
          ]}
        />
        <ButtonGroup>
          <Button size="lg" padding="1.5rem" fontSize="1.5rem" onClick={onOpen}>
            Sign In
          </Button>
        </ButtonGroup>
      </Flex>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <SignInModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Slide>
    </Flex>
  );
}

export default Navbar;
