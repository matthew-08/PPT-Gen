import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Flex as="main" minW="100%" flexDir="column" background="blackAlpha.200">
      <Navbar />
      <Flex as="section" flexDir="column" minH="100vh">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}

export default DefaultLayout;
