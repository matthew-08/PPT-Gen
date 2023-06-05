import React from 'react';
import { Text, Button, Flex } from '@chakra-ui/react';
import { Grid } from 'react-loader-spinner';
import SlotModal from '../global/SlotModal';
import useDownloadPpt from '../../hooks/useDownloadPpt';
import PptName from './DownloadModal/PptName';
import PreparingPpt from './DownloadModal/PreparingPpt';
import DownloadComplete from './DownloadModal/DownloadComplete';

function DownloadModal() {
  const {
    disclosureState,
    downloadStatus,
    url,
    pptName,
    handleSetName,
    handleDowload,
  } = useDownloadPpt();

  let modalContent;
  if (!downloadStatus.started) {
    modalContent = (
      <PptName
        handleSetName={handleSetName}
        pptName={pptName}
        handleDownload={handleDowload}
      />
    );
  }
  if (downloadStatus.started && pptName) {
    modalContent = <PreparingPpt />;
  }
  if (downloadStatus.completed && pptName) {
    modalContent = <DownloadComplete name={pptName} url={url} />;
  }

  return (
    <SlotModal modalHeader="Download" disclosureState={disclosureState}>
      <Flex flexDir="column">{modalContent}</Flex>
    </SlotModal>
  );
}

export default DownloadModal;
