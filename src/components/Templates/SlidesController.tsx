/* eslint-disable react/no-array-index-key */
import { Flex } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import useSelectedTemplate from '../../hooks/useSelectedTemplate';
import SlideRow from './SlideRow/SlideRow';

function SlidesController() {
  const { selectedTemplate } = useSelectedTemplate();
  console.log(selectedTemplate);
  return (
    <Flex flexDir="column">
      {selectedTemplate?.slides.map((slide, index) => {
        return <SlideRow slide={slide} slideIndex={index} key={uuid()} />;
      })}
    </Flex>
  );
}

export default SlidesController;
