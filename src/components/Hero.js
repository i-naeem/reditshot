import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }) => (
  <Flex
    bgGradient='linear(to-l, heroGradientStart, heroGradientEnd)'
    justifyContent='center'
    alignItems='center'
    bgClip='text'
  >
    <Heading fontSize='6vw'>{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'ReditShot',
};
