// Template state question, answer, additional
// for each field, render
import { Flex, Text, Input } from '@chakra-ui/react';

import React, { useState } from 'react';
import genTemplateState from '../../utils/genTemplateState';

function InputController() {
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
