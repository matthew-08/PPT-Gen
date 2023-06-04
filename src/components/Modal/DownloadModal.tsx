import React from 'react';
import { Text, Button, Flex } from '@chakra-ui/react';
import { Grid } from 'react-loader-spinner';
import SlotModal from '../global/SlotModal';
import { SlotModalProps } from '../../types';
import useDownloadPpt from '../../hooks/useDownloadPpt';

function DownloadModal() {
  const { disclosureState, downloadStatus, url } = useDownloadPpt();

  return (
    <SlotModal modalHeader="Download" disclosureState={disclosureState}>
      {downloadStatus.started ? (
        <>
          <Grid color="#553C9A" width={400} />
          <Text mt="1rem">Preparing your template...</Text>
          <Button ml="auto" mt="1rem" size="lg">
            Cancel
          </Button>
        </>
      ) : (
        downloadStatus.completed && (
          <>
            <Text textAlign="center" fontSize="1.4rem">
              Your template is complete! Click below to download.
            </Text>
            <Button
              mt="3rem"
              as="a"
              href={url}
              download="TEMP23t3.pptx"
              padding="1.5rem"
              colorScheme="purple"
              _hover={{
                color: 'white',
              }}
              fontSize="1.3rem"
            >
              Download
            </Button>
          </>
        )
      )}
    </SlotModal>
  );
}

export default DownloadModal;
