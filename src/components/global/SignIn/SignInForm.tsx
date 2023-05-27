/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Flex,
  Input,
  Text,
  FormControl,
  FormErrorMessage,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInFormSchema } from '../../../schemas/signin.schema';

type FormData = {
  email: string;
  password: string;
};

function SignInForm() {
  const check = true;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SignInFormSchema),
  });

  const handleUserSubmit = (data: FormData) => console.log(data);

  const fieldHasError = (f: keyof FormData) => f in errors;
  return (
    <Flex
      flexDir="column"
      as="form"
      gap="1rem"
      minW="100%"
      onSubmit={handleSubmit(handleUserSubmit)}
    >
      <FormControl isInvalid={fieldHasError('email')}>
        <Input
          placeholder="Email"
          size="lg"
          minW="100%"
          {...register('email')}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={fieldHasError('password')}>
        <Input placeholder="Password" size="lg" {...register('password')} />
      </FormControl>

      <Text>
        Don't have an account?{' '}
        <Text as="span" color="blue.400">
          Sign up here.
        </Text>
      </Text>
      <ModalFooter as={Flex} width="100%" flexDir="column" gap="0.4rem">
        <Button
          variant="outline"
          colorScheme="purple"
          size="lg"
          width="100%"
          type="submit"
        >
          Sign In
        </Button>
      </ModalFooter>
    </Flex>
  );
}

export default SignInForm;
