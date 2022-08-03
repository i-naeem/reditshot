import { Box, Button, Input, InputGroup } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Searchbar = props => {
  const router = useRouter();
  const [searchKeywords, setSearchKeywords] = useState('');

  const onChange = event => {
    setSearchKeywords(event.target.value);
  };

  const onSearch = props => {
    if (searchKeywords) {
      router.push(`/r/${searchKeywords}`);
    }
  };

  return (
    <Box {...props} p='2'>
      <InputGroup gap={1}>
        <Input
          type='Search...'
          onChange={onChange}
          value={searchKeywords}
          placeholder='Search for communities i.e wallpapers'
        />

        <Button colorScheme='teal' onClick={onSearch}>
          Search
        </Button>
      </InputGroup>
    </Box>
  );
};

export default Searchbar;
