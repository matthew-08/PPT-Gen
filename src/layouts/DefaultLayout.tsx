import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Flex
      as="main"
      minW="100%"
      flexDir="column"
      background="blackAlpha.200"
      flexGrow={1}
    >
      <Navbar />
      <Flex as="section" flexDir="column" height="100%">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}

export default DefaultLayout;
