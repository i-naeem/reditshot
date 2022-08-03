import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import ImageCard from '../../components/ImageCard';
import getImages from '../../lib/getImages';

export default function Subreddit({ images, after }) {
  const imgs = JSON.parse(images).map(img => (
    <ImageCard key={img.id} image={img} />
  ));

  return (
    <Box>
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
