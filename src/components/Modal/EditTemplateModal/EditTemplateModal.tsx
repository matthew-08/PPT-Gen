import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  Text,
  Flex,
  ModalBody,
  ModalCloseButton,
  Heading,
  AlertDialogOverlay,
  LinkOverlay,
} from '@chakra-ui/react';
import useAppFormStatus from '../../../hooks/useAppForm';
import useSubmitEdit from '../../../hooks/useSubmitEdit';
import { UserSlide } from '../../../types';
// eslint-disable-next-line import/no-named-as-default
import SlideRow from '../../Templates/SlideRow/SlideRow';

type Props = {
  modalState: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
  slides: UserSlide[];
  templateName: string;
};

function EditTemplateModal({ modalState, slides, templateName }: Props) {
  const { isOpen, onClose, onOpen } = modalState;
  const { handlers } = useAppFormStatus();
  const { submitStatus } = useSubmitEdit();

  const handleClick = () =>
    submitStatus.complete ? null : handlers.handleSetEditSubmitStatus(true);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading>{templateName}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            flexDir="column"
            m="auto"
            padding="1rem"
            maxH="600px"
            overflow="auto"
            className="slide-container"
          >
            {slides.map((s, i) => {
              return (
                <SlideRow
                  key={s.id}
                  slide={s.fields}
                  slideIndex={i}
                  isUserSlide
                  userSlideId={s.id}
                />
              );
            })}
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose} size="lg">
            Close
          </Button>
          <Button
            variant="solid"
            colorScheme={submitStatus.complete ? 'green' : 'purple'}
            size="lg"
            isLoading={submitStatus.loading}
            leftIcon={submitStatus.complete ? <CheckCircleIcon /> : undefined}
            onClick={handleClick}
          >
            {submitStatus.complete ? 'Changes saved' : 'Sumbit'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditTemplateModal;
