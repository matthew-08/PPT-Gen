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
import React, { useEffect, useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import genTemplateState from '../utils/genTemplateState';
import { FieldOptions, Template } from '../types';
import TemplateCard from '../components/Templates/TemplateCard';
import SlidesController from '../components/Templates/SlidesController';

const exTemplates: Template[] = [
  {
    templateId: 1,
    templateFields: ['question'],
    slideState: genTemplateState(28, ['question']),
  },
  {
    templateId: 2,
    templateFields: ['question', 'additional', 'answer'],
    slideState: genTemplateState(28, ['question', 'additional', 'answer']),
  },
];

function Home() {
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');
  const [templates, setTemplates] = useState<Template[]>(exTemplates);
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(
    exTemplates[1]
  );

  const handleSelectTemplate = (template: Template) => {
    const { templateId: id } = template;
    setSelectedTemplate(
      templates.find((t) => t.templateId === id) || templates[0]
    );
  };

  const handleWriteField = (
    templateId: number,
    field: FieldOptions,
    state: string
  ) => {};

  useEffect(() => {
    console.log(selectedTemplate);
  }, [selectedTemplate]);

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
          return (
            <TemplateCard
              key={index}
              template={template}
              handleSelectTemplate={handleSelectTemplate}
            />
          );
        })}
      </SimpleGrid>
      <Flex flexDir="column" mt="2rem" align="center">
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
      <SlidesController template={selectedTemplate} />
    </DefaultLayout>
  );
}

export default Home;
