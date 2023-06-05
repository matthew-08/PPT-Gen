import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  handlers: {
    handleDownload: () => void;
    handleSetName: (name: string) => void;
    handleRandomName: () => void;
  };
  pptName: string | false;
};

function PptName({ handlers, pptName }: Props) {
  const { handleDownload, handleRandomName, handleSetName } = handlers;
  return (
    <>
      <Text mb="1rem" fontSize="1.3rem">
        Enter a name for your PPT template:
      </Text>
      <Input
        value={pptName || ''}
        onChange={(e) => handleSetName(e.target.value)}
        maxLength={20}
        size="lg"
        padding="1.2rem"
        placeholder="Template name..."
        mb="1rem"
      />
      <Button mb="0.5rem" size="lg" onClick={handleRandomName}>
        Random Name
      </Button>
      <Button
        disabled={!pptName}
        mb="0.5rem"
        size="lg"
        colorScheme="purple"
        onClick={handleDownload}
      >
        Submit
      </Button>
    </>
  );
}

export default PptName;
