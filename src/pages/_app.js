import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import { Brand } from '../components/Brand';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME} - A reddit gallery.</title>
      </Head>

      <Box px='2' as='header' boxShadow='base'>
        <Flex alignItems='center' justifyContent='space-between' minH='50px'>
          <Brand />
          <DarkModeSwitch />
        </Flex>
      </Box>

      <Box as='main' minH='calc(100vh - 50px - 50px)'>
        <Component {...pageProps} />
      </Box>

      <Box px='2' as='footer' minH='50px'>
        <Text>
          Developed by <strong>@en</strong>
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
