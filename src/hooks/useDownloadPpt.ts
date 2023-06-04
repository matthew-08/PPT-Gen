/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { attemptDownload } from '../features/downloadSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import useSelectedTemplate from './useSelectedTemplate';

const useDownloadPpt = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pptName, setPptName] = useState<false | string>('');

  const dispatch = useAppDispatch();
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

  const handleDowload = async () => {
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
  useEffect(() => {
    if (validSumbit) {
      onOpen();
    }
  }, [validSumbit, onOpen]);

  const disclosureState = { isOpen, onOpen, onClose };

  return {
    disclosureState,
    downloadStatus,
    url,
    handleSetName,
    pptName,
  };
};

export default useDownloadPpt;
