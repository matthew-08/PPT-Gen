/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { InputState } from '../../pages/Home';
import objectKeys from '../../utils/objectKeys';
import { FieldInput } from './FieldInput';

type Props = {
  state: InputState;
  rowId: number;
};

function SlideRow(data: Props) {
  const keys = objectKeys(data.state);

  return (
    <Flex align="center" gap="1rem" px="30rem" mb="2rem">
      <Text>Slide {data.rowId}</Text>
      {keys.map((key, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <FieldInput field={key} slideId={data.rowId} key={index} />;
      })}
    </Flex>
  );
}

export default SlideRow;
