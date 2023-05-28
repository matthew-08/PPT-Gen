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
import React, { useState } from 'react';
import TemplateCard from '../components/Templates/TemplateCard';
import DefaultLayout from '../layouts/DefaultLayout';
import genTemplateState from '../utils/genTemplateState';

type FieldOptions = 'question' | 'answer' | 'additional';

export type Template = {
  templateId: number;
  templateFields: readonly FieldOptions[];
  inputState: {
    [key in FieldOptions]: string;
  }[];
};

const exTemplates: Template[] = [
  {
    templateId: 1,
    templateFields: ['question'],
    inputState: genTemplateState(28, ['question']),
  },
  {
    templateId: 2,
    templateFields: ['question'],
    inputState: genTemplateState(28, ['question', 'additional', 'answer']),
  },
];

function Home() {
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');
  const [templates, setTemplates] = useState<Template[]>(exTemplates);
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(
    exTemplates[0]
  );

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
        {templates.map((template, index) => {
          return <TemplateCard key={index} />;
        })}
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
      </Flex>
    </DefaultLayout>
  );
}

export default Home;
