/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { attemptDownload } from '../features/downloadSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import useSelectedTemplate from './useSelectedTemplate';

const useDownloadPpt = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const validSumbit = useAppSelector(
    (state) => state.templateReducer.selectedTemplate.validSubmit
  );

  const slideState = useAppSelector(
    (state) => state.templateReducer.submittedSlides
  );
  const { selectedTemplate } = useSelectedTemplate();

  const { downloadStatus } = useAppSelector((state) => state.downloadReducer);

  const handleDowload = async () => {
    const arrayOfSlides = Object.values(slideState);
    console.log('dispatch');
    dispatch(
      attemptDownload({
        templateId: selectedTemplate.templateId,
        templateInput: arrayOfSlides,
      })
    );
  };
  useEffect(() => {
    if (validSumbit) {
      onOpen();
      handleDowload();
    }
  }, [validSumbit, onOpen]);

  const disclosureState = { isOpen, onOpen, onClose };

  return {
    disclosureState,
    downloadStatus,
  };
};

export default useDownloadPpt;
