import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <Flex as="footer" mt="auto" p="0.5rem" align="center" justify="center">
      <Flex
        as="a"
        align="center"
        _hover={{
          color: '#553C9A',
        }}
        gap="1rem"
        cursor="click"
        href="https://github.com/matthew-08/ttt-ppt-gen-backend"
      >
        <Text fontSize="1.5rem">Matthew Crosby</Text>
        <AiFillGithub size={50} />
      </Flex>
    </Flex>
  );
}

export default Footer;
