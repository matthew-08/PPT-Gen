import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  handleSetName: (name: string) => void;
  pptName: string | false;
};

function PptName({ handleSetName, pptName }: Props) {
  return (
    <>
      <Text mb="1rem">Enter a name for your PPT template:</Text>
      <Input
        value={pptName || ''}
        onChange={(e) => handleSetName(e.target.value)}
        maxLength={20}
      />
      <Button>Random Name</Button>
      <Button disabled={!pptName}>Submit</Button>
    </>
  );
}

export default PptName;
