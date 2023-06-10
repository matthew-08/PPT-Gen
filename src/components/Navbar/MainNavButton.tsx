import React from 'react';
import {
  ButtonGroup,
  Button,
  Text,
  Image,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';
import { APP_IMAGES } from '../../utils/images';
import { LogoutModal } from '../Modal/LogoutModal/LogoutModal';

type Props = {
  onOpen: () => void;
};

function MainNavButton({ onOpen }: Props) {
  const {
    userInfo: {
      authStatus: { loggedIn },
    },
    handleTerminateSession,
  } = useAuth();
  const navigate = useNavigate();
  const { isOpen, onOpen: logoutOnOpen, onClose } = useDisclosure();
  return (
    <ButtonGroup>
      {!loggedIn ? (
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
      ) : (
        <ButtonGroup>
          <Button
            size="lg"
            fontSize="1.5rem"
            onClick={() => navigate('/dashboard')}
            leftIcon={<Image src={APP_IMAGES.presentation} width="20px" />}
          >
            My Templates
          </Button>
          <IconButton
            aria-label="logout"
            onClick={logoutOnOpen}
            size="lg"
            icon={<MdLogout />}
          />
        </ButtonGroup>
      )}
      <LogoutModal
        disclosureState={{
          isOpen,
          onClose,
          onOpen: logoutOnOpen,
        }}
      />
    </ButtonGroup>
  );
}

export default MainNavButton;
