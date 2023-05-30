import { Flex, Input, Text } from '@chakra-ui/react';
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
  const [slideState, updateSlideState] = useState<Props['slide']>(slide);
  const dispatch = useAppDispatch();

  const fields = objectKeys(slide);

  const handleInputChange = (value: string, field: FieldOptions) => {
    updateSlideState({
      ...slideState,
      [field]: value,
    });
    dispatch(
      onSlideInputChange({
        field,
        slideIndex,
        input: value,
      })
    );
  };

  return (
    <Flex>
      <Text>Slide {slideIndex + 1}</Text>
      {fields.map((field) => {
        return <RowInput slideIndex={slideIndex} field={field} key={field} />;
      })}
    </Flex>
  );
});

export default SlideRow;
