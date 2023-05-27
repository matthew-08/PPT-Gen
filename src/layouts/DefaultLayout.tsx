import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Flex
      as="main"
      backgroundColor="gray.200"
      minW="100%"
      minH="100vh"
      flexDir="column"
    >
      <Flex
        as="section"
        backgroundColor="gray.200"
        px="10rem"
        minH="100vh"
        flexDir="column"
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default DefaultLayout;
