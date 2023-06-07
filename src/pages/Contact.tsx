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
          minWidth="370px"
          m="auto"
          gap="1rem"
          borderRadius="10px"
          padding="2rem"
          flexDir="column"
          align="center"
          justify="center"
          background="whiteAlpha.500"
          marginTop={['4rem', '10rem']}
        >
          <IconButton
            aria-label="github"
            as="a"
            href="https://github.com/matthew-08"
            icon={<DiGithubFull size="200px" color="#553C9A" />}
            background="none"
            width="fit-content"
            padding="2rem"
            py="2.5rem"
            mb="1rem"
          />
          <IconButton
            aria-label="LinkedIn"
            icon={<AiFillLinkedin size="100px" color="#553C9A" />}
            background="none"
            as="a"
            href="https://www.linkedin.com/in/matthewjcsby"
            width="fit-content"
            padding="3rem"
          />
          <IconButton
            aria-label="Twitter"
            as="a"
            href="https://github.com/matthew-08"
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
