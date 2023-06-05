import React, { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

function TextBox({ children }: Props) {
  return (
    <Text
      mt="1rem"
      fontSize="1.2rem"
      textAlign="left"
      fontFamily="sans-serif"
      padding={['1rem', '0rem']}
      mb="1rem"
    >
      {children}
    </Text>
  );
}

export default TextBox;
