import React from 'react';
import { ButtonGroup, Button } from '@chakra-ui/react';
import { BiUserCircle } from 'react-icons/bi';

type Props = {
  onOpen: () => void;
};

function MainNavButton({ onOpen }: Props) {
  return (
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
  );
}

export default MainNavButton;
