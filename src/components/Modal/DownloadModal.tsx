import { Flex } from '@chakra-ui/react';
import SlotModal from '../global/SlotModal';
import useDownloadPpt from '../../hooks/useDownloadPpt';
import PreparingPpt from './DownloadModal/PreparingPpt';
import DownloadComplete from './DownloadModal/DownloadComplete';
import PptName from './DownloadModal/PptName';

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
    <SlotModal
      modalHeader="Download"
      disclosureState={disclosureState}
      options={{
        disableCloseButton: !!downloadStatus.started,
        disableOverlayClick: true,
      }}
    >
      <Flex flexDir="column">{modalContent}</Flex>
    </SlotModal>
  );
}

export default DownloadModal;
