import React from 'react';
import {
  Tr,
  Td,
  Flex,
  Text,
  Image,
  ButtonGroup,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { BiTrash } from 'react-icons/bi';
import { EditIcon } from '@chakra-ui/icons';
import { UserTemplate } from '../../types';
import useTemplateSlidesController from '../../hooks/useTemplateSlidesController';
import EditTemplateModal from '../Modal/EditTemplateModal/EditTemplateModal';

type Props = {
  userTemplate: UserTemplate;
};

export function TemplateRow({ userTemplate }: Props) {
  const { createdOn, id, name, templateInfo, timesGenerated } = userTemplate;

  const { handlers, modalState } = useTemplateSlidesController();

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
          <IconButton icon={<BiTrash />} size="lg" aria-label="trash button" />
          <IconButton
            icon={<EditIcon />}
            size="lg"
            aria-label="edit button"
            onClick={() => handlers.handleEditTemplate(templateInfo.id)}
          />
        </ButtonGroup>
      </Td>
      {modalState.isOpen && <EditTemplateModal modalState={modalState} />}
    </Tr>
  );
}
