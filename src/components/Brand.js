import { Text } from '@chakra-ui/react';

export const Brand = props => {
  return (
    <Text
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      fontSize='2xl'
      fontWeight='bold'
    >
      {process.env.NEXT_PUBLIC_APP_NAME || 'Shots'}
    </Text>
  );
};
