import { Box, ChakraProvider, Flex, Link, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { Brand } from '../components/Brand';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import Searchbar from '../components/Searchbar';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Reditshot - A reddit gallery.</title>
      </Head>

      <Box px='2' as='header' boxShadow='base'>
        <Flex alignItems='center' justifyContent='space-between' minH='50px'>
          <Brand fontSize='2xl' />

          <Box
            display='flex'
            alignItems='center'
            height='100%'
            flexGrow='1'
            maxW='600px'
          >
            <Searchbar flexGrow='1' />
            <DarkModeSwitch />
          </Box>
        </Flex>
      </Box>

      <Box as='main' minH='calc(100vh - 50px - 50px)'>
        <Component {...pageProps} />
      </Box>

      <Box
        px='2'
        as='footer'
        minH='50px'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Text>
          Developed by{' '}
          <Link
            href='https://github.com/i-naeem'
            target='_blank'
            fontWeight='bold'
          >
            @en
          </Link>
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
