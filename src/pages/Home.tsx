/* eslint-disable react/no-array-index-key */
import { Heading, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import SlidesController from '../components/Templates/SlidesController';
import { useAppDispatch } from '../store/hooks';
import { fetchAllTemplates } from '../features/templateSlice';
import TCardContainer from '../components/Templates/TCardContainer';
import DownloadModal from '../components/Modal/DownloadModal';

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTemplates());
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
      <SlidesController />
      <DownloadModal />
    </DefaultLayout>
  );
}

export default Home;
