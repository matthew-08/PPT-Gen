import React from 'react';
import { Text } from '@chakra-ui/react';
import SlotModal from '../global/SlotModal';
import { SlotModalProps } from '../../types';

type Props = {
  slotModalProps: SlotModalProps;
};

function DownloadModal({ slotModalProps }: Props) {
  return (
    <SlotModal
      disclosureState={slotModalProps.disclosureState}
      modalHeader="Download"
    >
      <Text>Error</Text>
    </SlotModal>
  );
}

export default DownloadModal;
