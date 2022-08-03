import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import ImageCard from '../../components/ImageCard';
import getImages from '../../lib/getImages';
import { useRouter } from 'next/router';

export default function Subreddit({ images, after }) {
  const router = useRouter();

  const imgs = JSON.parse(images).map(img => (
    <ImageCard key={img.id} image={img} />
  ));

  return (
    <Box>
      <Box px='1' py='5'>
        <Heading>{router.asPath}</Heading>
      </Box>
      <SimpleGrid columns={[1, 2, 3, 4]}>{imgs}</SimpleGrid>

      <Box p='1'>
        <Flex justifyContent='flex-end'>
          <Button as='a' href={'?after=' + after} colorScheme='blue'>
            Next Page
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export const getServerSideProps = async context => {
  try {
    const data = await getImages(context.query.subreddit, {
      limit: 50,
      after: context.query.after,
    });
    return {
      props: {
        images: JSON.stringify(data.images),
        after: data.after,
      },
    };
  } catch (error) {
    return {
      props: {
        images: [],
      },
    };
  }
};
