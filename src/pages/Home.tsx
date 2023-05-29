/* eslint-disable react/no-array-index-key */
import {
  Divider,
  Grid,
  Heading,
  SimpleGrid,
  Flex,
  useMediaQuery,
  Input,
  Text,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import genTemplateState from '../utils/genTemplateState';
import { FieldOptions, SlideState, Template } from '../types';
import TemplateCard from '../components/Templates/TemplateCard';
import SlidesController from '../components/Templates/SlidesController';
import { useAppDispatch } from '../store/hooks';
import { fetchAllTemplates } from '../features/templateSlice';
import TCardContainer from '../components/Templates/TCardContainer';

function Home() {
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTemplates());
  });

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
      <TCardContainer />
      <Flex flexDir="column" mt="2rem" align="center">
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
    </DefaultLayout>
  );
}

export default Home;
