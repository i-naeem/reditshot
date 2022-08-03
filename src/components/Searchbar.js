import { Box, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Searchbar = props => {
  const router = useRouter();

  return (
    <Box {...props} p='2' as='form' action={'/search'}>
      <Input
        size='sm'
        required
        name='q'
        type='Search...'
        borderRadius='sm'
        defaultValue={router.query.q || ''}
        placeholder='Search for communities i.e wallpapers'
      />
    </Box>
  );
};

export default Searchbar;
