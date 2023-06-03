/* eslint-disable react/no-array-index-key */
import { Flex, Button, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import useSelectedTemplate from '../../hooks/useSelectedTemplate';
import useAppForm from '../../hooks/useAppForm';
// eslint-disable-next-line import/no-named-as-default
import SlideRow from './SlideRow/SlideRow';

function SlidesController() {
  const { slides } = useSelectedTemplate();
  const { handleSetSubmitStatus, handleSetAutoFillStatus } = useAppForm();
  const containerRef = useRef(null);

  return (
    <>
      <Flex flexDir="column" mt="2rem" align="center" textAlign="center">
        <Text m="auto" fontSize="2rem" mb="1rem">
          Type the content for each text field of the template:
        </Text>
        <Text m="auto" maxW="60ch" textAlign="center" mb="0.5rem">
          *If you'd like to demo the functionality, click the auto-fill button
          below and then click submit at the bottom of the page.
        </Text>
        <Button
          m="auto"
          colorScheme="purple"
          size="lg"
          mb="1rem"
          onClick={() => handleSetAutoFillStatus(true)}
        >
          Auto Fill
        </Button>
      </Flex>
      <Flex
        flexDir="column"
        m="auto"
        ref={containerRef}
        padding="1rem"
        maxH="800px"
        overflow="auto"
      >
        {slides.map((slide, index) => {
          return <SlideRow slide={slide} slideIndex={index} key={index} />;
        })}
      </Flex>
      <Button
        m="auto"
        mt="1rem"
        mb="2rem"
        padding="2rem"
        fontSize="1.5rem"
        colorScheme="blue"
        onClick={() => handleSetSubmitStatus(true)}
      >
        Submit
      </Button>
    </>
  );
}

export default SlidesController;
