import { Heading, Flex, Text, ScaleFade, Divider } from '@chakra-ui/react';
import React from 'react';
import { Slide } from '@chakra-ui/transition';
import RegisterForm from '../components/Forms/Register/RegisterForm';
import DefaultLayout from '../layouts/DefaultLayout';

function Register() {
  return (
    <DefaultLayout>
      <ScaleFade in initialScale={0.7}>
        <Flex
          as="section"
          minW="100%"
          py="4rem"
          justify="center"
          flexDir="column"
          align="center"
        >
          <Flex
            flexDir="column"
            background="white"
            padding="2.5rem"
            borderRadius="10px"
          >
            <Heading fontSize="5xl" mb="1rem">
              Register
            </Heading>
            <Divider mb="2rem" />
            <RegisterForm />
          </Flex>
        </Flex>
      </ScaleFade>
    </DefaultLayout>
  );
}

export default Register;
