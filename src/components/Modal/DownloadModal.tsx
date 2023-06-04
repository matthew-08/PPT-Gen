import React from 'react';
import { Text } from '@chakra-ui/react';
import { Grid } from 'react-loader-spinner';
import SlotModal from '../global/SlotModal';
import { SlotModalProps } from '../../types';
import useDownloadPpt from '../../hooks/useDownloadPpt';

function DownloadModal() {
  const { disclosureState, downloadStatus } = useDownloadPpt();

  return (
    <SlotModal modalHeader="Download" disclosureState={disclosureState}>
      <Grid />
    </SlotModal>
  );
}

export default DownloadModal;
