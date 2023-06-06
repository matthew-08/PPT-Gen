import { List, ListItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type Props = {
  listItems: [string, string][];
};

function CustomList({ listItems }: Props) {
  const navigate = useNavigate();
  return (
    <List
      display="flex"
      color="white"
      fontSize="1.5rem"
      mr="1rem"
      gap="1.5rem"
      mt="0.2rem"
    >
      {listItems.map(([name, href]) => (
        <ListItem
          as="a"
          onClick={() => navigate(href)}
          key={name}
          cursor="pointer"
          className="list-item"
          _hover={{
            color: 'white',
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
