/* eslint-disable react/no-array-index-key */
// Template state question, answer, additional
// for each field, render
import { Flex, Text, Input } from '@chakra-ui/react';

import React, { useState } from 'react';
import { Template, FieldOptions } from '../../pages/Home';
import genTemplateState from '../../utils/genTemplateState';
import SlideRow from './SlideRow';

type Props = {
  template: Template;
  handleWriteToField: (
    field: FieldOptions,
    slideId: number,
    data: string
  ) => void;
};

function InputController({ template, handleWriteToField }: Props) {
  const { inputState, templateFields, templateId } = template;

  return (
    <Flex flexDir="column">
      {inputState.map((input, index) => {
        return (
          <SlideRow
            rowId={index}
            state={input}
            key={index}
            handleWriteToField={handleWriteToField}
          />
        );
      })}
    </Flex>
  );
}

export default InputController;
