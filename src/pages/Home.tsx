/* eslint-disable react/no-array-index-key */
import {
  Divider,
  Grid,
  Heading,
  SimpleGrid,
  Flex,
  useMediaQuery,
  Input,
  Text,
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
      <Flex flexDir="column" mt="2rem">
        {columns.map((c, i) => {
          return (
            <Flex key={i} align="center" gap="1rem" px="30rem" mb="2rem">
              <Text minW="10rem" fontSize="2rem">
                Slide {i + 1}
              </Text>
              <Input
                key={i}
                placeholder="Question"
                maxW="300px"
                padding="1.5rem"
                background="white"
              />
              <Input
                key={i}
                placeholder="Answer"
                maxW="300px"
                padding="1.5rem"
                background="white"
              />
              <Input
                key={i}
                placeholder="Additional"
                maxW="300px"
                padding="1.5rem"
                background="white"
              />
            </Flex>
          );
        })}
      </Flex>
    </DefaultLayout>
  );
}

export default Home;
