import { Box, SimpleGrid } from '@chakra-ui/react';
import ImageCard from '../../components/ImageCard';
import getImages from '../../lib/getImages';

export default function Subreddit({ images }) {
  const imgs = JSON.parse(images).map(img => (
    <ImageCard key={img.id} image={img} />
  ));

  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3, 4]}>{imgs}</SimpleGrid>
    </Box>
  );
}

export const getServerSideProps = async context => {
  try {
    const images = await getImages(context.query.subreddit, { limit: 25 });
    return {
      props: {
        images: JSON.stringify(images),
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
