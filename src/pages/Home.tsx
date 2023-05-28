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
  Button,
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
        <Text m="auto" fontSize="2rem" mb="1rem">
          Type the content for each text field of the template:
        </Text>
        <Text m="auto" maxW="60ch" textAlign="center" mb="0.5rem">
          *If you'd like to demo the functionality, click the auto-fill button
          below and then click submit at the bottom of the page.
        </Text>
        <Button m="auto" colorScheme="purple" size="lg" mb="1rem">
          Auto Fill
        </Button>
        {columns.map((c, i) => {
          return (
            <Flex key={i} align="center" gap="1rem" px="30rem" mb="2rem">
              <Text minW="10rem" fontSize="2rem">
                Slide {i + 1}
              </Text>
              <Input
                key={i}
                fontSize="1.5rem"
                placeholder="Question"
                maxW="300px"
                padding="1.5rem"
                background="white"
              />
              <Input
                key={i}
                fontSize="1.5rem"
                placeholder="Answer"
                maxW="300px"
                padding="1.5rem"
                background="white"
              />
              <Input
                key={i}
                fontSize="1.5rem"
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
