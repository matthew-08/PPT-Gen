// Template state question, answer, additional
// for each field, render
import { Flex, Text, Input } from '@chakra-ui/react';

import React from 'react';

type FieldOptions = 'question' | 'answer' | 'additional';

type Template = {
  templateId: number;
  templateFields: readonly FieldOptions[];
  inputState: {
    question: string;
    answer?: string;
    additional?: string;
    id: string;
  };
};

const test: Template = {
  templateId: 2,
  templateFields: ['additional', 'answer', 'question'] as const,
  inputState: {
    question: '2',
    id: '2',
  },
};

function InputController() {
  const template = {
    templateId: 2,
    templateFields: ['question' | 'answer' | 'additional'],
  };

  const columns = Array(30).fill({
    question: '',
    answer: '',
    additional: '',
  });

  return columns.map((c) => {
    <Flex key={i} align="center" gap="1rem" px="30rem" mb="2rem">
      <Text minW="10rem" fontSize="2rem">
        Slide {i + 1}
      </Text>
      <Input
        key={i}
        fontSize="1.5rem"
        placeholder="Question"
        maxW="300px"
        padding="1.5rem"
        background="white"
      />
      <Input
        key={i}
        fontSize="1.5rem"
        placeholder="Answer"
        maxW="300px"
        padding="1.5rem"
        background="white"
      />
      <Input
        key={i}
        fontSize="1.5rem"
        placeholder="Additional"
        maxW="300px"
        padding="1.5rem"
        background="white"
      />
    </Flex>;
  });
}

export default InputController;
