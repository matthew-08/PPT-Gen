/* eslint-disable react/jsx-props-no-spreading */
import { Flex, Text, ModalFooter, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { SignInFormSchema } from '../../../schemas/signin.schema';
import { FormInput } from '../../global/FormInput';
import { generateFormInputs } from '../../../utils/generateFormInputs';

export type FormData = {
  email: string;
  password: string;
};

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SignInFormSchema),
  });

  const navigate = useNavigate();

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
      minW="100%"
      onSubmit={handleSubmit(handleUserSubmit)}
    >
      {inputObjects.map((iObj) => (
        <FormInput<FormData> fieldInfo={iObj} key={iObj.fieldName} />
      ))}
      <Text>
        Don't have an account?{' '}
        <Text
          as="span"
          color="blue.400"
          cursor="pointer"
          onClick={() => navigate('/register')}
        >
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
