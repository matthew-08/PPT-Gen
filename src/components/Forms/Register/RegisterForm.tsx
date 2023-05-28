/* eslint-disable react/jsx-props-no-spreading */
import { Flex, Text, Button } from '@chakra-ui/react';
import { FormInput } from '../FormInput';
import { RegisterFormSchema } from '../../../schemas/register.schema';
import useCustomForm from '../../../hooks/useCustomForm';

export type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

function RegisterForm() {
  const { handleSubmit, inputObjects } = useCustomForm<FormData>(
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
      {
        fieldName: 'confirmPassword',
        placeholder: 'Confirm Password',
        inputType: 'password',
      },
    ],
    RegisterFormSchema
  );

  const handleUserSubmit = (data: FormData) => console.log(data);

  return (
    <Flex
      flexDir="column"
      as="form"
      gap="1rem"
      minW="500px"
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
