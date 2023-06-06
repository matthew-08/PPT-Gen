import { Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { DiGithubFull } from 'react-icons/di';
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import DefaultLayout from '../layouts/DefaultLayout';

function Contact() {
  return (
    <DefaultLayout>
      <Flex as="main" flexDir="column">
        <Flex
          as="section"
          minH="200px"
          minWidth="300px"
          m="auto"
          borderRadius="10px"
          padding="1rem"
          mt="1rem"
          flexDir="column"
          align="center"
          justify="center"
          marginTop="10rem"
        >
          <IconButton
            aria-label="github"
            as="a"
            href="https://github.com/matthew-08"
            icon={<DiGithubFull size="200px" color="#553C9A" />}
            background="none"
            width="fit-content"
            padding="2rem"
            mb="1rem"
          />
          <IconButton
            aria-label="github"
            icon={<AiFillLinkedin size="100px" color="#553C9A" />}
            background="none"
            width="fit-content"
            padding="3rem"
          />
          <IconButton
            aria-label="github"
            icon={<AiFillTwitterSquare size="100px" color="#553C9A" />}
            background="none"
            width="fit-content"
            padding="3rem"
          />
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}

export default Contact;
