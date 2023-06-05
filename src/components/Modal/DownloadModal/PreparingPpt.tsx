import { Grid } from 'react-loader-spinner';
import { Text } from '@chakra-ui/react';

function PreparingPpt() {
  return (
    <>
      <Grid color="#553C9A" width={400} />
      <Text pt="2rem" m="auto" fontSize="1.4rem" mb="1rem">
        Preparing your template...
      </Text>
    </>
  );
}

export default PreparingPpt;
