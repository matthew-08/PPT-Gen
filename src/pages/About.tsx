import { Flex, Heading, Text, Image, Fade } from '@chakra-ui/react';
import DefaultLayout from '../layouts/DefaultLayout';
import AboutHeader from '../components/About/AboutHeader';
import TextBox from '../components/About/TextBox';
import { APP_IMAGES } from '../utils/images';

function About() {
  return (
    <DefaultLayout>
      <Flex
        mt="1rem"
        mx="auto"
        maxW={['365px', '500px', '720px', '1000px']}
        pt="1rem"
        py="1rem"
        flexDir="column"
        backgroundColor="white"
        px={['0.5rem', '2rem']}
        borderRadius="10px"
      >
        <AboutHeader heading="What is this application?" />
        <TextBox>
          PPTGen is an application which generates PowerPoint files from a set
          of common educational PowerPoint templates
          <Text as="span" color="blue.400">
            <a href="https://www.taysteachingtoolkit.com/review-games">
              {' '}
              ( Tay's Teaching Toolkit ).
            </a>
          </Text>{' '}
          The idea is that PPTGen abstracts away the need for you to work
          directly with the PowerPoint files themselves and instead streamlines
          the process through a simple web-based UI.
        </TextBox>
        <AboutHeader heading="How does it work?" />
        <TextBox>
          Each PowerPoint template has a limited set of fields per slide:
          Question, Additional Information, and Answer. The user provides their
          input for the respective slides and upon submit, the inputs are sent
          to a Node.JS server for validation and potential generation. The
          majority of the work for this application is done on the backend and
          exposed via a REST API.
        </TextBox>
        <Text mb="0.5rem">Data flow:</Text>
        <Image src={APP_IMAGES.appDiagram} mb="2rem" />
        <Text m="auto">
          Feel free to checkout the{' '}
          <Text as="span" color="blue.400">
            <a href="https://github.com/matthew-08/PPT-Gen">
              github repository
            </a>
          </Text>{' '}
          for a more detailed breakdown of this application.
        </Text>
      </Flex>
    </DefaultLayout>
  );
}

export default About;
