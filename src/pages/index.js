import { Text } from '@chakra-ui/react';
import { Main } from '../components/Main';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const Index = () => (
  <Container height='100vh'>
    <Header minHeight='50px'>
      <Text>Hello World</Text>
      <DarkModeSwitch />
    </Header>

    <Main minHeight='calc(100vh - 100px)'>
      <Hero />
    </Main>

    <Footer minHeight='50px'>
      <Text>Hello World</Text>
    </Footer>
  </Container>
);

export default Index;
