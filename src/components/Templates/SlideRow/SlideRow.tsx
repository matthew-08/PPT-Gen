import { Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { onSlideInputChange } from '../../../features/templateSlice';
import { useAppDispatch } from '../../../store/hooks';
import { FieldOptions, SlideState } from '../../../types';
import objectKeys from '../../../utils/objectKeys';
import RowInput from './RowInput';

type Props = {
  slide: SlideState;
  slideIndex: number;
};

function SlideRow({ slide, slideIndex }: Props) {
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
        input: value,
        field,
        slideIndex,
      })
    );
  };

  return (
    <Flex>
      <Text>Slide {slideIndex + 1}</Text>
      {fields.map((field) => {
        return (
          <RowInput
            field={field}
            key={field}
            handleInputChange={handleInputChange}
          />
        );
      })}
    </Flex>
  );
}

export default SlideRow;
