/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { InputState } from '../../pages/Home';
import objectKeys from '../../utils/objectKeys';
import { FieldInput } from './FieldInput';

type Props = {
  state: InputState;
  rowId: number;
  handleWriteToField: (
    field: FieldOptions,
    slideId: number,
    data: string
  ) => void;
};

const SlideRow = memo(function SlideRow(data: Props) {
  const keys = objectKeys(data.state);
  useEffect(() => {
    console.log('rerener slide row');
  }, []);

  return (
    <Flex align="center" gap="1rem" mb="2rem">
      <Text minW="8rem" fontSize="1.8rem">
        Slide {data.rowId + 1}
      </Text>
      {keys.map((key, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return (
          <FieldInput
            field={key}
            slideId={data.rowId}
            key={index}
            handleWriteToField={data.handleWriteToField}
          />
        );
      })}
    </Flex>
  );
});

export default SlideRow;
