import { Flex, Heading } from '@chakra-ui/react';
import DefaultLayout from '../layouts/DefaultLayout';

function Dashboard() {
  return (
    <DefaultLayout>
      <Heading m="auto" mt="2rem">
        My Templates
      </Heading>
      <Flex />
    </DefaultLayout>
  );
}

export default Dashboard;
