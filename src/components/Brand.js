import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Brand = props => {
  return (
    <Link href='/' passHref>
      <Text
        as='a'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='2xl'
        fontWeight='bold'
      >
        Reditshot
      </Text>
    </Link>
  );
};
