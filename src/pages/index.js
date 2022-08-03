import {
  Box,
  Text,
  Link,
  Input,
  Center,
  Button,
  Heading,
  Container,
  ButtonGroup,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Brand } from '../components/Brand';

const Index = props => {
  return (
    <Container
      as={Center}
      style={{ height: 'calc(100vh - 300px)' }}
      maxW='container.lg'
    >
      <Box flexGrow='1'>
        <Box mb='2'>
          <Brand />
          <Text color='gray'>
            A place to see all the available photos in a reddit community
          </Text>
        </Box>

        <Box as='form' action='/search' method='GET'>
          <Input
            mb='2'
            size='lg'
            name='q'
            required
            type='Search...'
            placeholder='Search for communities i.e wallpapers'
          />
        </Box>

        <ButtonGroup size='md'>
          <Button
            as={Link}
            variant='link'
            href='r/wallpapers'
            colorScheme='blue'
          >
            r/wallpapers
          </Button>
          <Button as={Link} variant='link' href='r/photos' colorScheme='red'>
            r/photos
          </Button>
          <Button
            as={Link}
            variant='link'
            href='r/earthporn'
            colorScheme='green'
          >
            r/earthporn
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default Index;
