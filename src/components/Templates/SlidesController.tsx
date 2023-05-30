/* eslint-disable react/no-array-index-key */
import { Flex } from '@chakra-ui/react';
import { Slide } from '@chakra-ui/transition';
import { v4 as uuid } from 'uuid';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import useSelectedTemplate from '../../hooks/useSelectedTemplate';
import { Template } from '../../types';
// eslint-disable-next-line import/no-named-as-default
import SlideRow from './SlideRow/SlideRow';

function SlidesController() {
  const { selectedTemplate } = useSelectedTemplate();

  useEffect(() => {}, [selectedTemplate]);

  return (
    <Flex flexDir="column">
      {selectedTemplate?.slides.map((slide, index) => {
        return <SlideRow slide={slide} slideIndex={index} key={index} />;
      })}
    </Flex>
  );
}

export default SlidesController;
