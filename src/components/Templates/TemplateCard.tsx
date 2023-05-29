import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Template } from '../../types';

type Props = {
  template: Template;
  loading: boolean;
};

function TemplateCard({ template, loading }: Props) {
  return (
    <Flex
      justify="center"
      align="center"
      border="2px"
      borderColor="green.400"
      minH="175px"
      cursor="pointer"
    >
      <Text>Placeholder</Text>
    </Flex>
  );
}

export default TemplateCard;
