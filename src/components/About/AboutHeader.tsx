import { Heading, Flex, Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  heading: string;
};

function AboutHeader({ heading }: Props) {
  return (
    <Flex flexDir="column" align="center" mt="1rem" textAlign="center">
      <Heading pb="0.5rem">{heading}</Heading>
      <Box minW="20%" backgroundColor="purple.700" height="8px" />
    </Flex>
  );
}

export default AboutHeader;
