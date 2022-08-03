import { Heading, Text } from '@chakra-ui/react';

export const Brand = props => {
  return (
    <Heading
      as='a'
      href='/'
      bgClip='text'
      fontWeight='bold'
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      {...props}
    >
      Reditshot
    </Heading>
  );
};
