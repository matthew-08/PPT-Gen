import { Flex, Heading } from '@chakra-ui/react';
import TemplateContainer from '../components/Dashboard/TemplateContainer';
import DefaultLayout from '../layouts/DefaultLayout';

function Dashboard() {
  return (
    <DefaultLayout>
      <Flex justify="center" flexDir="column" align="center">
        <Heading m="auto" mt="2rem">
          My Templates
        </Heading>
        <TemplateContainer />
      </Flex>
    </DefaultLayout>
  );
}

export default Dashboard;
