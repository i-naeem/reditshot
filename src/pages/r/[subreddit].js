import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import ImageCard from '../../components/ImageCard';
import { useRouter } from 'next/router';
import getImages from '../../lib/getImages';

export default function Subreddit({ images, after }) {
  const router = useRouter();
  const imgs = JSON.parse(images).map(img => (
    <ImageCard key={img.id} image={img} />
  ));

  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3, 4]}>{imgs}</SimpleGrid>

      <Button as='a' href={'?after=' + after}>
        Next Page
      </Button>
    </Box>
  );
}

export const getServerSideProps = async context => {
  try {
    const data = await getImages(context.query.subreddit, {
      limit: 25,
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
