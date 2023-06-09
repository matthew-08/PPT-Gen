import { DownloadIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Text, Button } from '@chakra-ui/react';

type Props = {
  url: string;
  name: string;
};

function DownloadComplete({ name, url }: Props) {
  return (
    <>
      <Text textAlign="center" fontSize="1.4rem">
        Your template is complete! Click below to download.
      </Text>
      <Button
        mt="1.5rem"
        mb="0.5rem"
        as="a"
        href={url}
        download={`${name}.pptx`}
        padding="1.7rem"
        colorScheme="purple"
        leftIcon={<DownloadIcon />}
        _hover={{
          color: 'white',
        }}
        fontSize="1.5rem"
      >
        Download
      </Button>
      <Button
        mb="1rem"
        as="a"
        href={url}
        download={`${name}.pptx`}
        padding="1.7rem"
        colorScheme="purple"
        leftIcon={<PlusSquareIcon />}
        _hover={{
          color: 'white',
        }}
        fontSize="1.5rem"
      >
        Save to collection
      </Button>
    </>
  );
}

export default DownloadComplete;
