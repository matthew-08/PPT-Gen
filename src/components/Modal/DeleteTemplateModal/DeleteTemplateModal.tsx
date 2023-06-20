import React from 'react';
import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import { DisclosureState } from '../../../types';
import SlotModal from '../../global/SlotModal';

type Props = {
  modalState: DisclosureState;
  handleDeleteTemplate: (templateId: number) => void;
  templateId: number;
  loadingStatus: 'idle' | 'loading';
};

function DeleteTemplateModal({
  modalState,
  handleDeleteTemplate,
  templateId,
  loadingStatus,
}: Props) {
  return (
    <SlotModal disclosureState={modalState} modalHeader="Delete">
      <Text textAlign="center" color="red.400">
        You are about to delete this template from your collection. Click submit
        to confirm.
      </Text>
      <ButtonGroup ml="auto" mt="1rem">
        <Button size="lg" onClick={modalState.onClose}>
          On close
        </Button>
        <Button
          size="lg"
          isLoading={loadingStatus === 'loading'}
          colorScheme="red"
          onClick={() => handleDeleteTemplate(templateId)}
        >
          Confirm
        </Button>
      </ButtonGroup>
    </SlotModal>
  );
}

export default DeleteTemplateModal;
