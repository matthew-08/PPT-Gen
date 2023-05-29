/* eslint-disable react/no-array-index-key */
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { SlideState, Template } from '../../types';
import SlideRow from './SlideRow/SlideRow';

type Props = {
  template: Template;
};

function SlidesController({ template }: Props) {
  const { slideState, templateFields } = template;
  const [submittedSlides, setSubmittedSlides] = useState<SlideState[]>([]);
  const handleSubmit = (slide: SlideState) => {
    return setSubmittedSlides([...submittedSlides, slide]);
  };
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
