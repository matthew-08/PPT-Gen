/* eslint-disable react/no-array-index-key */
import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import TemplateCard from './TemplateCard';
import { useAppSelector } from '../../store/hooks';

function TCardContainer() {
  const { templates, loading } = useAppSelector(
    (state) => state.templateReducer
  );
  return (
    <SimpleGrid
      mt="10"
      minChildWidth="300px"
      spacing={1}
      px={['1rem', '3rem', '3rem', '20rem']}
    >
      {templates.map((template, index) => {
        return <TemplateCard key={index} template={template} loading />;
      })}
    </SimpleGrid>
  );
}

export default TCardContainer;
