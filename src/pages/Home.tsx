/* eslint-disable react/no-array-index-key */
import {
  Heading,
  Flex,
  useMediaQuery,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import SlidesController from '../components/Templates/SlidesController';
import { useAppDispatch } from '../store/hooks';
import { fetchAllTemplates } from '../features/templateSlice';
import TCardContainer from '../components/Templates/TCardContainer';
import useSubmit from '../hooks/useSubmit';
import DownloadModal from '../components/Modal/DownloadModal';

function Home() {
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTemplates());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultLayout>
      <Heading
        mx="auto"
        color="black"
        mb="1rem"
        textAlign="center"
        mt="10"
        fontSize="2.8rem"
      >
        Choose a template:
      </Heading>
      <Flex flexDir="column" minW="100%">
        <TCardContainer />
      </Flex>
      <Flex flexDir="column" mt="2rem" align="center" textAlign="center">
        <Text m="auto" fontSize="2rem" mb="1rem">
          Type the content for each text field of the template:
        </Text>
        <Text m="auto" maxW="60ch" textAlign="center" mb="0.5rem">
          *If you'd like to demo the functionality, click the auto-fill button
          below and then click submit at the bottom of the page.
        </Text>
        <Button m="auto" colorScheme="purple" size="lg" mb="1rem">
          Auto Fill
        </Button>
      </Flex>
      <SlidesController />
      <DownloadModal />
    </DefaultLayout>
  );
}

export default Home;
