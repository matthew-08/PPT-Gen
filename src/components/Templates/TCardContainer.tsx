/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import { Flex } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import TemplateCard from './TemplateCard';
import useTCardInfo from '../../hooks/UseTCardInfo';

const TCardContainer = memo(function TCardContainer() {
  const { tCardInfo } = useTCardInfo();
  return (
    <Flex mt="10" gap="1rem" flexWrap="wrap" align="center" justify="center">
      {tCardInfo.map((template, index) => {
        return (
          <TemplateCard
            key={uuid()}
            tCardInfo={template}
            loading={template.loading}
          />
        );
      })}
    </Flex>
  );
});

export default TCardContainer;
