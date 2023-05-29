import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Template } from '../../types';
import objectKeys from '../../utils/objectKeys';
import SlideRow from './SlideRow/SlideRow';

function SlidesController({
  inputState,
  templateFields,
  templateId,
}: Template) {
  const fields = objectKeys(templateFields);
  return (
    <Flex flexDir="column">
      {fields.map((field) => {
        <SlideRow />;
      })}
    </Flex>
  );
}

export default SlidesController;
