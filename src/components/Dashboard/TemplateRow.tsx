import {
  Tr,
  Td,
  Flex,
  Text,
  Image,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { BiTrash } from 'react-icons/bi';
import { EditIcon } from '@chakra-ui/icons';
import { UserTemplate } from '../../types';
import useTemplateSlidesController from '../../hooks/useTemplateSlidesController';
import EditTemplateModal from '../Modal/EditTemplateModal/EditTemplateModal';
import useDeleteTemplate from '../../hooks/useDeleteTemplate';
import DeleteTemplateModal from '../Modal/DeleteTemplateModal/DeleteTemplateModal';

type Props = {
  userTemplate: UserTemplate;
};

export function TemplateRow({ userTemplate }: Props) {
  const { createdOn, id, name, templateInfo, timesGenerated } = userTemplate;

  const {
    handlers,
    modalState: editModalState,
    slides,
  } = useTemplateSlidesController();

  const { deleteModalState, handlers: deleteHandlers } = useDeleteTemplate();

  return (
    <Tr key={id} fontSize="1.5rem">
      <Td align="center">
        <Flex flexDir="column" align="center">
          <Image src={templateInfo.img} maxW="200px" />{' '}
          <Text mt="0.5rem">{name}</Text>
        </Flex>
      </Td>
      <Td>{format(Number(createdOn), 'yyyy-MM-dd')}</Td>
      <Td>{timesGenerated}</Td>
      <Td>
        <ButtonGroup>
          <IconButton
            icon={<BiTrash />}
            size="lg"
            aria-label="trash button"
            onClick={() => deleteHandlers.handleOpenModal()}
          />
          <IconButton
            icon={<EditIcon />}
            size="lg"
            aria-label="edit button"
            onClick={() => handlers.handleEditTemplate(id)}
          />
        </ButtonGroup>
      </Td>
      {editModalState.isOpen && (
        <EditTemplateModal
          modalState={editModalState}
          slides={slides}
          templateName={name || ''}
        />
      )}
      {deleteModalState.isOpen && (
        <DeleteTemplateModal modalState={deleteModalState} />
      )}
    </Tr>
  );
}
