import {
  Divider,
  Grid,
  Heading,
  SimpleGrid,
  Flex,
  useMediaQuery,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import TemplateCard from '../components/Templates/TemplateCard';
import DefaultLayout from '../layouts/DefaultLayout';

function Home() {
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');

  const columns = Array(28).fill(1);

  return (
    <DefaultLayout>
      <Heading mx="auto" color="black" mb="1rem" textAlign="center" mt="10">
        Choose a template
      </Heading>
      <SimpleGrid
        mt="10"
        minChildWidth="300px"
        spacing={1}
        px={['1rem', '3rem', '3rem', '20rem']}
      >
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </SimpleGrid>
      <Flex>
        {columns.map((c, i) => {
          return <Input key={i} />;
        })}
      </Flex>
    </DefaultLayout>
  );
}

export default Home;
