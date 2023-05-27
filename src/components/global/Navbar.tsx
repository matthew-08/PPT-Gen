import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import CustomList from './CustomList';
import SignInModal from '../Forms/SignIn/SignIn';

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
            ['Home', '/register'],
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
      <SignInModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Flex>
  );
}

export default Navbar;
