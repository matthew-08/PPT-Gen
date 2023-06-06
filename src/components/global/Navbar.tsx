import {
  Button,
  ButtonGroup,
  Circle,
  Flex,
  Image,
  Heading,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { BiUserCircle } from 'react-icons/bi';
import CustomList from './CustomList';
import SlotModal from './SlotModal';
import SignInForm from '../Forms/SignIn/SignInForm';
import NavMenu from './NavMenu';
import { APP_IMAGES } from '../../utils/images';
import PptIcon from './PptIcon';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (
    <Flex
      as="header"
      width="100%"
      px={['1rem', '3rem']}
      py="1rem"
      justify="space-between"
      align="center"
      background="purple.700"
    >
      <Flex align="center">
        <Heading fontSize={['5xl', '6xl']} color="purple.50" fontWeight="bold">
          PPTGen
        </Heading>
        <PptIcon />
      </Flex>
      <Flex as="nav" align="center">
        {isSmallerThan800 ? (
          <NavMenu />
        ) : (
          <>
            <CustomList
              listItems={[
                ['Home', '/'],
                ['About', '/about'],
                ['Contact', '/contact'],
              ]}
            />
            <ButtonGroup>
              <Button
                size="lg"
                padding="1.5rem"
                fontSize="1.5rem"
                onClick={onOpen}
                _hover={{
                  color: '#553C9A',
                }}
                rightIcon={<BiUserCircle size={30} />}
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
