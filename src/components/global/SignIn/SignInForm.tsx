import React from 'react';
import { Flex, Input, Text } from '@chakra-ui/react';

function SignInForm() {
  return (
    <Flex flexDir="column" gap="1rem" minW="100%">
      <Input placeholder="Email" size="lg" minW="100%" />
      <Input placeholder="Password" size="lg" />
      <Text>
        Don't have an account?{' '}
        <Text as="span" color="blue.400">
          Sign up here.
        </Text>
      </Text>
    </Flex>
  );
}

export default SignInForm;
