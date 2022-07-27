import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box p='2' as='header' boxShadow='base' minH='50px'>
        <Flex alignItems='center' justifyContent='space-between' h='100%'>
          <Text>{process.env.NEXT_PUBLIC_APP_NAME || 'Shots'}</Text>
          <DarkModeSwitch />
        </Flex>
      </Box>

      <Box p='2' as='main' minH='calc(100vh - 50px - 50px)'>
        <Component {...pageProps} />
      </Box>

      <Box p='2' as='footer' minH='50px'>
        <Text>
          Developed by <strong>@en</strong>
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
