import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from '../components/global/Navbar';

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Flex as="main" minW="100%" minH="100vh" flexDir="column">
      <Navbar />
      <Flex as="section" px="10rem" flexDir="column">
        {children}
      </Flex>
    </Flex>
  );
}

export default DefaultLayout;
