import React from 'react';
import { Grid } from 'react-loader-spinner';
import { Text, Button } from '@chakra-ui/react';

function PreparingPpt() {
  return (
    <>
      <Grid color="#553C9A" width={400} />
      <Text pt="2rem" m="auto">
        Preparing your template...
      </Text>
      <Button ml="auto" mt="1rem" size="lg">
        Cancel
      </Button>
    </>
  );
}

export default PreparingPpt;
