import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import CustomList from './CustomList';
import SlotModal from './SlotModal';
import SignInForm from '../Forms/SignIn/SignInForm';
import NavMenu from './NavMenu';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

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
        {isSmallerThan800 ? (
          <NavMenu />
        ) : (
          <>
            <CustomList
              listItems={[
                ['Home', '/'],
                ['About', 'github.com'],
                ['Contact', 'github.com'],
              ]}
            />
            <ButtonGroup>
              <Button
                size="lg"
                padding="1.5rem"
                fontSize="1.5rem"
                onClick={onOpen}
              >
                Sign In
              </Button>
            </ButtonGroup>
          </>
        )}
      </Flex>
      <SlotModal
        disclosureState={{ isOpen, onClose, onOpen }}
        modalHeader="Sign In"
      >
        <SignInForm />
      </SlotModal>
    </Flex>
  );
}

export default Navbar;
