/* eslint-disable react/no-array-index-key */
import { useEffect, memo } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import TemplateCard from './TemplateCard';
import useTCardInfo from '../../hooks/UseTCardInfo';

const TCardContainer = memo(function TCardContainer() {
  const { tCardInfo } = useTCardInfo();
  useEffect(() => {
    console.log('t card re-render');
  }, []);
  return (
    <SimpleGrid
      mt="10"
      minChildWidth="275px"
      spacing={1}
      px={['1rem', '3rem', '3rem', '25rem']}
    >
      {tCardInfo.map((template, index) => {
        return (
          <TemplateCard
            key={template.templateId}
            tCardInfo={template}
            loading={template.loading}
          />
        );
      })}
    </SimpleGrid>
  );
});

export default TCardContainer;
