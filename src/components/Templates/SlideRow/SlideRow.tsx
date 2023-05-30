import { Flex, Input, Text, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useState, memo, useEffect } from 'react';
import { onSlideInputChange } from '../../../features/templateSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { FieldOptions, SlideState } from '../../../types';
import objectKeys from '../../../utils/objectKeys';
import RowInput from './RowInput';

type Props = {
  slide: SlideState;
  slideIndex: number;
};

export const SlideRow = memo(function SlideRow({ slide, slideIndex }: Props) {
  const fields = objectKeys(slide);
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  useEffect(() => {
    console.log('Slide row re-render');
  }, []);

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
      {fields.map((field) => {
        return <RowInput slideIndex={slideIndex} field={field} key={field} />;
      })}
    </Flex>
  );
});

export default SlideRow;
