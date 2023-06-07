import { Fade, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Footer from '../components/global/Footer';
import Navbar from '../components/Navbar/Navbar';

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
      <Fade in>
        <Flex as="section" flexDir="column" height="100%">
          {children}
        </Flex>
      </Fade>

      <Footer />
    </Flex>
  );
}

export default DefaultLayout;
