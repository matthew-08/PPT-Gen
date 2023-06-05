import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import AboutHeader from '../components/About/AboutHeader';
import TextBox from '../components/About/TextBox';

function About() {
  return (
    <DefaultLayout>
      <Flex
        mt="1rem"
        mx="auto"
        maxW="1000px"
        pt="1rem"
        flexDir="column"
        backgroundColor="white"
        px="8rem"
        borderRadius="10px"
      >
        <AboutHeader heading="What is this application?" />
        <TextBox>
          PPTGen is an application which generates PowerPoint files from a set
          of common educational PowerPoint templates
          <Text as="span" color="blue.400">
            <a href="https://www.taysteachingtoolkit.com/review-games">
              {' '}
              ( Tay's Teaching Toolkit ).
            </a>
          </Text>{' '}
          The idea is that PPTGen abstracts away the need for you to work
          directly with the PowerPoint files themselves and instead streamlines
          the process through a simple web-based UI.
        </TextBox>
        <AboutHeader heading="How does it work?" />
        <TextBox>
          Each PowerPoint template has a limited set of fields per slide:
          Question, Additional Information, and Answer. The user provides their
          input for the respective slides and upon submit, the inputs are sent
          to a Node.JS server for validation and potential submission.
        </TextBox>
      </Flex>
    </DefaultLayout>
  );
}

export default About;
