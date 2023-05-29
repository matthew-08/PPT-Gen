/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import TemplateCard from './TemplateCard';
import { useAppSelector } from '../../store/hooks';

function TCardContainer() {
  const { templates, loading } = useAppSelector(
    (state) => state.templateReducer
  );
  useEffect(() => {
    console.log(templates);
  }, [templates]);
  return (
    <SimpleGrid
      mt="10"
      minChildWidth="275px"
      spacing={1}
      px={['1rem', '3rem', '3rem', '25rem']}
    >
      {templates.map((template, index) => {
        return (
          <TemplateCard key={index} template={template} loading={loading} />
        );
      })}
    </SimpleGrid>
  );
}

export default TCardContainer;
