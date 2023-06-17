/* eslint-disable react/no-array-index-key */
import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { memo } from 'react';
import { EditFieldOptions, SlideFields, UserField } from '../../../types';
import RowInput from './RowInput';
import useSlideRow from '../../../hooks/useSlideRow';

type Props = {
  slide: SlideFields | UserField[];
  slideIndex: number;
  isUserSlide?: boolean;
};

export const SlideRow = memo(function SlideRow({
  slide,
  slideIndex,
  isUserSlide,
}: Props) {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const { hookForm } = useSlideRow(slide, slideIndex, {
    isUserField: true,
  });

  return (
    <Flex
      align="center"
      fontSize="2rem"
      mb="2rem"
      key={slideIndex}
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
            field={typeof field !== 'string' ? field.fieldType.type : field}
            hookForm={hookForm}
            key={index}
          />
        );
      })}
    </Flex>
  );
});

export default SlideRow;
