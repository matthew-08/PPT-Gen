import { List, ListItem } from '@chakra-ui/react';

type Props = {
  listItems: [string, string][];
};

function CustomList({ listItems }: Props) {
  return (
    <List display="flex" color="white" fontSize="1.5rem" mr="1rem" gap="1rem">
      {listItems.map(([name, href]) => (
        <ListItem
          as="a"
          href={href}
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
