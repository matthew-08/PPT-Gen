/* eslint-disable react/jsx-props-no-spreading */
import { Flex, Text, ModalFooter, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { SignInFormSchema } from '../../../schemas/signin.schema';
import { FormInput } from '../FormInput';
import useCustomForm from '../../../hooks/useCustomForm';
import useAuth from '../../../hooks/useAuth';

export type FormData = {
  email: string;
  password: string;
};

function SignInForm() {
  const {
    userInfo,
    handleCreateSession,
    error,
    setError: handleSetError,
  } = useAuth();
  const { handleSubmit, inputObjects, setError } = useCustomForm(
    [
      {
        fieldName: 'email',
        placeholder: 'Email',
        inputType: 'text',
      },
      {
        fieldName: 'password',
        placeholder: 'Password',
        inputType: 'password',
      },
    ],
    SignInFormSchema
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      inputObjects.map(({ fieldName }) =>
        setError(fieldName, {
          message: 'Invalid email or password',
        })
      );
      handleSetError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleUserSubmit = (data: FormData) => handleCreateSession(data);

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
      <ModalFooter
        as={Flex}
        width="100%"
        flexDir="column"
        gap="0.5rem"
        padding="0"
        paddingBottom="1rem"
        mb="1rem"
      >
        <Button
          variant="solid"
          colorScheme="purple"
          size="lg"
          width="100%"
          type="submit"
        >
          Sign In
        </Button>
        <Button
          variant="outline"
          colorScheme="purple"
          size="lg"
          width="100%"
          type="submit"
        >
          Cancel
        </Button>
      </ModalFooter>
    </Flex>
  );
}

export default SignInForm;
