/* eslint-disable react/jsx-props-no-spreading */
import { Flex, Text, ModalFooter, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInFormSchema } from '../../../schemas/signin.schema';
import { FormInput } from '../../global/FormInput';
import { generateFormInputs } from '../../../utils/generateFormInputs';

export type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SignInFormSchema),
  });

  const handleUserSubmit = (data: FormData) => console.log(data);

  const fieldHasError = (f: keyof FormData) => f in errors;

  const inputObjects = generateFormInputs<FormData>({
    inputInfo: [
      {
        fieldName: 'email',
        placeholder: 'Email',
      },
      {
        fieldName: 'password',
        placeholder: 'Password',
      },
      {
        fieldName: 'confirmPassword',
        placeholder: 'Confirm Password',
      },
    ],
    errors,
    isInvalid: fieldHasError,
    register,
  });
  return (
    <Flex
      flexDir="column"
      as="form"
      gap="1rem"
      minW="370px"
      maxW="500px"
      onSubmit={handleSubmit(handleUserSubmit)}
    >
      {inputObjects.map((iObj) => (
        <FormInput<FormData> fieldInfo={iObj} key={iObj.fieldName} />
      ))}
      <Text>
        Already have an account?{' '}
        <Text as="span" color="blue.400" cursor="pointer">
          Sign in.
        </Text>
      </Text>
      <Button
        variant="solid"
        colorScheme="purple"
        width="100%"
        fontSize="1.2rem"
        py="1.5rem"
        type="submit"
      >
        Register
      </Button>
    </Flex>
  );
}

export default RegisterForm;
