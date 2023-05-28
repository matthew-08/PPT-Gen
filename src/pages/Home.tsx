import { Divider, Grid, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import TemplateCard from '../components/Templates/TemplateCard';
import DefaultLayout from '../layouts/DefaultLayout';

function Home() {
  return (
    <DefaultLayout>
      <Heading mx="auto" mt="20" color="black" borderBottom="2px" mb="1rem">
        Choose a template
      </Heading>
      {/* <SimpleGrid mt="10" px="10rem">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </SimpleGrid> */}
    </DefaultLayout>
  );
}

export default Home;
