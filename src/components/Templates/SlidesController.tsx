/* eslint-disable react/no-array-index-key */
import { Flex } from '@chakra-ui/react';
import useSelectedTemplate from '../../hooks/useSelectedTemplate';
import SlideRow from './SlideRow/SlideRow';

function SlidesController() {
  const { selectedTemplate } = useSelectedTemplate();
  console.log(selectedTemplate);
  return (
    <Flex flexDir="column">
      {selectedTemplate?.slides.map((slide, index) => {
        return <SlideRow slide={slide} slideIndex={index} key={index} />;
      })}
    </Flex>
  );
}

export default SlidesController;
