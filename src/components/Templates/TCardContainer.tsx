/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import { Flex } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import TemplateCard from './TemplateCard';
import useTemplateCard from '../../hooks/useTemplateCard';

const TCardContainer = memo(function TCardContainer() {
  const { templateCards } = useTemplateCard();
  return (
    <Flex mt="10" gap="1rem" flexWrap="wrap" align="center" justify="center">
      {templateCards.map((tCard) => {
        return (
          <TemplateCard
            key={uuid()}
            tCardInfo={tCard}
            loading={tCard.loading}
          />
        );
      })}
    </Flex>
  );
});

export default TCardContainer;
