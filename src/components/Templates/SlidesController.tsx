/* eslint-disable react/no-array-index-key */
import { Flex } from '@chakra-ui/react';
import { Template } from '../../types';
import SlideRow from './SlideRow/SlideRow';

type Props = {
  template: Template;
};

function SlidesController({ template }: Props) {
  const { slideState, templateFields } = template;
  return (
    <Flex flexDir="column">
      {slideState.map((slide, slideIndex) => {
        return (
          <SlideRow slide={slide} slideIndex={slideIndex} key={slideIndex} />
        );
      })}
    </Flex>
  );
}

export default SlidesController;
