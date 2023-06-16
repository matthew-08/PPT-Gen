import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Image,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  IconButton,
  ButtonGroup,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { format } from 'date-fns';
import { BiTrash } from 'react-icons/bi';
import { EditIcon } from '@chakra-ui/icons';
import useUserTemplateController from '../../hooks/useUserTemplateController';
import { TemplateRow } from './TemplateRow';

function TemplateContainer() {
  const { handlers, templates } = useUserTemplateController();
  useEffect(() => {
    handlers.handleGetAllUserTemplates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <TableContainer
      maxW="800px"
      minW="1000px"
      borderRadius="10px"
      padding="1rem"
    >
      <Table
        variant="simple"
        colorScheme="purple"
        background="white"
        size="lg"
        borderRadius="10px"
      >
        <Tr>
          <Th>Template</Th>
          <Th>Created on</Th>
          <Th>Generation Counter</Th>
          <Th>Edit</Th>
        </Tr>
        <Tbody>
          {templates.map((t) => {
            return <TemplateRow key={t.id} userTemplate={t} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TemplateContainer;
