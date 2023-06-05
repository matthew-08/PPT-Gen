/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { attemptDownload } from '../features/downloadSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import useSelectedTemplate from './useSelectedTemplate';
import genRandomName from '../utils/genRandonName';
import useAppFormStatus from './useAppForm';

const useDownloadPpt = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const [pptName, setPptName] = useState<false | string>('');
  const validSumbit = useAppSelector(
    (state) => state.templateReducer.selectedTemplate.validSubmit
  );
  const slideState = useAppSelector(
    (state) => state.templateReducer.submittedSlides
  );
  const { selectedTemplate } = useSelectedTemplate();

  const { downloadStatus, url } = useAppSelector(
    (state) => state.downloadReducer
  );
  const { handleSetSubmitStatus } = useAppFormStatus();

  const handleDownload = async () => {
    const arrayOfSlides = Object.values(slideState);
    dispatch(
      attemptDownload({
        templateId: selectedTemplate.templateId,
        templateInput: arrayOfSlides,
      })
    );
  };
  const handleSetName = (name: string) => {
    setPptName(name);
  };

  const handleRandomName = () => {
    const rName = genRandomName();
    setPptName(rName);
  };

  const handleClose = () => {
    handleSetSubmitStatus(false);
    console.log('closing');
    onClose();
  };
  useEffect(() => {
    if (validSumbit) {
      onOpen();
    }
  }, [validSumbit, onOpen]);

  const disclosureState = { isOpen, onOpen, onClose: handleClose };
  const handlers = {
    handleSetName,
    handleRandomName,
    handleDownload,
  };

  return {
    disclosureState,
    downloadStatus,
    url,
    handlers,
    pptName,
  };
};

export default useDownloadPpt;
