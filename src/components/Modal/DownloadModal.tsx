import React from 'react';
import SlotModal from '../global/SlotModal';
import useDownloadPpt from '../../hooks/useDownloadPpt';
import PptName from './DownloadModal/PptName';
import PreparingPpt from './DownloadModal/PreparingPpt';
import DownloadComplete from './DownloadModal/DownloadComplete';

function DownloadModal() {
  const { disclosureState, downloadStatus, url, pptName, handlers } =
    useDownloadPpt();

  let modalContent;
  if (!downloadStatus.started) {
    modalContent = <PptName handlers={handlers} pptName={pptName} />;
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
