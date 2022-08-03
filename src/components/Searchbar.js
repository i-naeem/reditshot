import { Box, Button, Input, InputGroup } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Searchbar = props => {
  const router = useRouter();
  const [searchKeywords, setSearchKeywords] = useState('');

  const onChange = event => {
    setSearchKeywords(event.target.value);
  };

  const onSearch = event => {
    event.preventDefault();
    if (searchKeywords) {
      router.push(`/r/${searchKeywords}`);
    }
  };

  return (
    <Box {...props} p='2' as='form' onSubmit={onSearch}>
      <InputGroup gap={1}>
        <Input
          type='Search...'
          size='sm'
          borderRadius='sm'
          onChange={onChange}
          value={searchKeywords}
          placeholder='Search for communities i.e wallpapers'
        />

        <Button size='sm' borderRadius='sm' colorScheme='teal' type='submit'>
          Search
        </Button>
      </InputGroup>
    </Box>
  );
};

export default Searchbar;
