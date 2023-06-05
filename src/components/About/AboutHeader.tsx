import { Heading } from '@chakra-ui/react';
import React from 'react';

type Props = {
  heading: string;
};

function AboutHeader({ heading }: Props) {
  return <Heading>{heading}</Heading>;
}

export default AboutHeader;
