import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Template } from '../../types';
import objectKeys from '../../utils/objectKeys';
import SlideRow from './SlideRow/SlideRow';

function SlidesController({
  slideState,
  templateFields,
  slideIndex,
}: Template) {
  return (
    <Flex flexDir="column">
      {slideState.map((slide) => {
        return (
          <SlideRow slide={slide} slideIndex={slideIndex} key={slideIndex} />
        );
      })}
    </Flex>
  );
}

export default SlidesController;
