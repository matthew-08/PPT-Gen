import { List, ListItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type Props = {
  listItems: [string, string][];
};

function CustomList({ listItems }: Props) {
  const navigate = useNavigate();
  return (
    <List display="flex" color="white" fontSize="1.5rem" mr="1rem" gap="1rem">
      {listItems.map(([name, href]) => (
        <ListItem
          as="a"
          onClick={() => navigate(href)}
          key={name}
          cursor="pointer"
          _hover={{
            color: '#CBD5E0',
          }}
        >
          {' '}
          {name}
        </ListItem>
      ))}
    </List>
  );
}

export default CustomList;
