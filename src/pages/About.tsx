import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import AboutHeader from '../components/About/AboutHeader';

function About() {
  return (
    <DefaultLayout>
      <Flex mx="auto" maxW="1000px">
        <AboutHeader heading="What is this application?" />
      </Flex>
    </DefaultLayout>
  );
}

export default About;
