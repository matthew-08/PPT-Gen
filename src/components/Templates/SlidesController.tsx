/* eslint-disable react/no-array-index-key */
import { Flex } from '@chakra-ui/react';
import useSelectedTemplate from '../../hooks/useSelectedTemplate';
// eslint-disable-next-line import/no-named-as-default
import SlideRow from './SlideRow/SlideRow';

function SlidesController() {
  const { selectedTemplate } = useSelectedTemplate();

  return (
    <Flex flexDir="column" m="auto" padding="1rem" maxH="800px" overflow="auto">
      {selectedTemplate?.slides.map((slide, index) => {
        return <SlideRow slide={slide} slideIndex={index} key={index} />;
      })}
    </Flex>
  );
}

export default SlidesController;
