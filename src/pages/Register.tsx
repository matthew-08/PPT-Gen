import { Heading, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import RegisterForm from '../components/Forms/Register/RegisterForm';
import DefaultLayout from '../layouts/DefaultLayout';

function Register() {
  return (
    <DefaultLayout>
      <Flex
        as="section"
        minW="100%"
        py="4rem"
        justify="center"
        flexDir="column"
        align="center"
      >
        <Flex flexDir="column">
          <Heading mb="2rem">Register</Heading>
          <RegisterForm />
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}

export default Register;
