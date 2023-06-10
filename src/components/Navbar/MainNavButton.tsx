import React from 'react';
import { ButtonGroup, Button, Text, Image, IconButton } from '@chakra-ui/react';
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';
import { APP_IMAGES } from '../../utils/images';

type Props = {
  onOpen: () => void;
};

function MainNavButton({ onOpen }: Props) {
  const {
    userInfo: {
      authStatus: { loggedIn },
    },
  } = useAuth();
  const navigate = useNavigate();
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
          <IconButton size="lg" icon={<MdLogout />} />
        </ButtonGroup>
      )}
    </ButtonGroup>
  );
}

export default MainNavButton;
