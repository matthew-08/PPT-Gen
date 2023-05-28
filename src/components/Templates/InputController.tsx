/* eslint-disable react/no-array-index-key */
// Template state question, answer, additional
// for each field, render
import { Flex, Text, Input } from '@chakra-ui/react';

import React, { useState } from 'react';
import { Template } from '../../pages/Home';
import genTemplateState from '../../utils/genTemplateState';
import SlideRow from './SlideRow';

type Props = {
  template: Template;
};

function InputController({ template }: Props) {
  const { inputState, templateFields, templateId } = template;

  return (
    <>
      {inputState.map((input, index) => {
        return <SlideRow rowId={index} state={input} key={index} />;
      })}
    </>
  );
}

export default InputController;
