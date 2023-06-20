import {
  CheckCircleIcon,
  DownloadIcon,
  PlusSquareIcon,
} from '@chakra-ui/icons';
import { Text, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import useSaveUserTemplate from '../../../hooks/useSaveUserTemplate';

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

  const { handleSaveUserTemplate, status } = useSaveUserTemplate();

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
        isDisabled={!loggedIn}
        padding="1.7rem"
        variant="outline"
        onClick={status === 'complete' ? () => null : handleSaveUserTemplate}
        colorScheme={status === 'complete' ? 'green' : 'purple'}
        isLoading={status === 'loading'}
        leftIcon={
          status === 'complete' ? <CheckCircleIcon /> : <PlusSquareIcon />
        }
        fontSize="1.5rem"
        mb="0.5rem"
      >
        {status === 'idle' ? 'Save to collection' : 'Added to your collection'}
      </Button>
      {!loggedIn && (
        <Text m="auto" mb="1rem">
          * Create an account to save your templates.
        </Text>
      )}
    </>
  );
}

export default DownloadComplete;
