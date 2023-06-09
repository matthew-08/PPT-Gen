import { DownloadIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Text, Button } from '@chakra-ui/react';
import useAuth from '../../../hooks/useAuth';

type Props = {
  url: string;
  name: string;
};

function DownloadComplete({ name, url }: Props) {
  const {
    userInfo: {
      authStatus: { loggedIn },
    },
  } = useAuth();
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
        disabled={!loggedIn}
        padding="1.7rem"
        variant="outline"
        colorScheme="purple"
        leftIcon={<PlusSquareIcon />}
        fontSize="1.5rem"
        mb="0.5rem"
        _hover={{
          color: 'gray',
        }}
      >
        Save to collection
      </Button>
      {loggedIn && (
        <Text m="auto" mb="1rem">
          * Create an account to save your templates.
        </Text>
      )}
    </>
  );
}

export default DownloadComplete;
