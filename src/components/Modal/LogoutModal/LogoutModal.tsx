import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { MdCancel, MdLogout } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';
import { DisclosureState } from '../../../types';
import SlotModal from '../../global/SlotModal';

type Props = {
  disclosureState: DisclosureState;
};

export function LogoutModal({ disclosureState }: Props) {
  const {
    handleTerminateSession,
    userInfo: { authStatus },
  } = useAuth();
  const { isOpen, onClose, onOpen } = disclosureState;
  useEffect(() => {
    if (!authStatus.loggedIn) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStatus]);
  return (
    <SlotModal disclosureState={disclosureState} modalHeader="Log Out">
      <Flex gap="0.5rem" flexDir="column" mb="0.5rem">
        <Text mb="1rem" fontSize="1.1rem">
          You are about to log out. Please click below to confirm.
        </Text>
        <Button
          colorScheme="red"
          size="lg"
          padding="1.5rem"
          onClick={handleTerminateSession}
          leftIcon={<MdLogout />}
        >
          Logout
        </Button>
        <Button
          background="gray.300"
          size="lg"
          padding="1.5rem"
          onClick={onClose}
          leftIcon={<MdCancel />}
        >
          Cancel
        </Button>
      </Flex>
    </SlotModal>
  );
}
