/* eslint-disable react/no-array-index-key */
import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { memo } from 'react';
import useSlideRow from '../../../hooks/useSlideRow';
import { SlideFields } from '../../../types';
import RowInput from './RowInput';

type Props = {
  slide: SlideFields;
  slideIndex: number;
};

export const SlideRow = memo(function SlideRow({ slide, slideIndex }: Props) {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const { handleChange, form: slideForm } = useSlideRow(slide, slideIndex);

  return (
    <Flex
      align="center"
      fontSize="2rem"
      mb="2rem"
      gap={isSmallerThan800 ? '1rem' : ''}
      flexDir={isSmallerThan800 ? 'column' : 'row'}
    >
      <Text fontSize="1.8rem" textAlign="center" minW="8rem">
        Slide {slideIndex + 1}
      </Text>
      {slide.map((field, index) => {
        return (
          <RowInput
            slideIndex={slideIndex}
            field={field}
            handleChange={handleChange}
            key={index}
            value={slideForm[field] as string}
          />
        );
      })}
    </Flex>
  );
});

export default SlideRow;
