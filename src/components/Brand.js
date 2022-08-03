import { Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Brand = props => {
  return (
    <Link href='/' passHref>
      <Heading
        as='a'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontWeight='bold'
        {...props}
      >
        Reditshot
      </Heading>
    </Link>
  );
};
