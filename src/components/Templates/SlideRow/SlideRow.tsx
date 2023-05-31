/* eslint-disable react/no-array-index-key */
import { Flex, Input, Slide, Text, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, memo, useEffect } from 'react';
import { FieldOptions, SlideState } from '../../../types';
import objectKeys from '../../../utils/objectKeys';
import RowInput from './RowInput';

type Props = {
  slide: SlideState;
  slideIndex: number;
};

export const SlideRow = memo(function SlideRow({ slide, slideIndex }: Props) {
  const fields = objectKeys(slide);
  const formObj = fields.reduce((acc: { [key: string]: string }, k) => {
    acc[k] = '';
    return acc;
  }, {});
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [form, setForm] = useState(formObj);
  useEffect(() => {
    console.log('Slide row re-render');
  }, []);
  const handleChange = (field: FieldOptions, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

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
      {fields.map((field, index) => {
        return (
          <RowInput
            slideIndex={slideIndex}
            field={field}
            handleChange={handleChange}
            key={index}
            value={form[field]}
          />
        );
      })}
    </Flex>
  );
});

export default SlideRow;
