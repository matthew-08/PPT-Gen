import React from 'react';
import { Text, Button, Flex } from '@chakra-ui/react';
import { Grid } from 'react-loader-spinner';
import SlotModal from '../global/SlotModal';
import useDownloadPpt from '../../hooks/useDownloadPpt';
import PptName from './DownloadModal/PptName';

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
  if (pptName && downloadStatus.started) {
    modalContent = (
      <>
        <Grid color="#553C9A" width={400} />
        <Text mt="1rem">Preparing your template...</Text>
        <Button ml="auto" mt="1rem" size="lg">
          Cancel
        </Button>
      </>
    );
    if (downloadStatus.completed) {
      modalContent = downloadStatus.completed && (
        <>
          <Text textAlign="center" fontSize="1.4rem">
            Your template is complete! Click below to download.
          </Text>
          <Button
            mt="1.5rem"
            mb="1rem"
            as="a"
            href={url}
            download="TEMP23t3.pptx"
            padding="1.7rem"
            colorScheme="purple"
            _hover={{
              color: 'white',
            }}
            fontSize="1.5rem"
          >
            Download
          </Button>
        </>
      );
    }
  }

  return (
    <SlotModal modalHeader="Download" disclosureState={disclosureState}>
      <Flex flexDir="column" minH="200px">
        {modalContent}
      </Flex>
    </SlotModal>
  );
}

export default DownloadModal;
