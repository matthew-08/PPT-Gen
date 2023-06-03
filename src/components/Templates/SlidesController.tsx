/* eslint-disable react/no-array-index-key */
import { Flex, Button } from '@chakra-ui/react';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import useSelectedTemplate from '../../hooks/useSelectedTemplate';
import useSubmit from '../../hooks/useSubmit';
// eslint-disable-next-line import/no-named-as-default
import SlideRow from './SlideRow/SlideRow';

function SlidesController() {
  const { selectedTemplate, slides } = useSelectedTemplate();
  const { handleSetSubmitStatus, submitStatus } = useSubmit();
  const containerRef = useRef(null);

  return (
    <>
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
