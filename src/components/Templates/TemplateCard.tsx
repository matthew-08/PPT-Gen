import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Template } from '../../pages/Home';

type Props = {
  template: Template;
  handleSelectTemplate: (template: Template) => void
};

function TemplateCard({ template }: Props) {
  return (
    <Flex
      justify="center"
      align="center"
      border="2px"
      borderColor="green.400"
      minH="175px"
      cursor={'pointer'}
      onClick=
    >
      <Text>Placeholder</Text>
    </Flex>
  );
}

export default TemplateCard;
