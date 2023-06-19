/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  attemptDownload,
  onChangeDownloadStatus,
  onChangeName,
} from '../features/downloadSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import useSelectedTemplate from './useSelectedTemplate';
import genRandomName from '../utils/genRandonName';
import useAppFormStatus from './useAppForm';

const useDownloadPpt = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();

  const [pptName, setPptName] = useState<false | string>('');

  const {
    selectedTemplate: { validSubmit },
    submittedSlides: slideState,
  } = useAppSelector((state) => state.templateReducer);
  const { selectedTemplate } = useSelectedTemplate();

  const { downloadStatus, url } = useAppSelector(
    (state) => state.downloadReducer
  );
  const {
    handlers: { handleSetSubmitStatus, handleClearAllSlides },
  } = useAppFormStatus();

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
    if (downloadStatus.completed) {
      handleClearAllSlides();
    }
    handleSetSubmitStatus(false);
    dispatch(
      onChangeDownloadStatus({
        cancelled: false,
        completed: false,
        failed: false,
        started: false,
      })
    );
    onClose();
  };
  useEffect(() => {
    if (validSubmit) {
      onOpen();
    }
    if (pptName) {
      dispatch(onChangeName(pptName));
    }
  }, [validSubmit, onOpen, pptName]);

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
