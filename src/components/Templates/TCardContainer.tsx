/* eslint-disable react/no-array-index-key */
import React, { useEffect, memo } from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import TemplateCard from './TemplateCard';
import { useAppSelector } from '../../store/hooks';
import useTCardInfo from '../../hooks/UseTCardInfo';

const TCardContainer = memo(function TCardContainer() {
  const { tCardInfo } = useTCardInfo();
  useEffect(() => {
    console.log('t card re-render');
  }, []);
  return (
    <Flex mt="10" gap="1rem" flexWrap="wrap" align="center" justify="center">
      {tCardInfo.map((template, index) => {
        return (
          <TemplateCard
            key={template.templateId}
            tCardInfo={template}
            loading={template.loading}
          />
        );
      })}
    </Flex>
  );
});

export default TCardContainer;
