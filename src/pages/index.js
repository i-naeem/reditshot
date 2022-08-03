import { Box, SimpleGrid } from '@chakra-ui/react';
import ImageCard from '../components/ImageCard';
import getImages from '../lib/getImages';

const Index = ({ images = [] }) => {
  const imgs = JSON.parse(images).map(img => (
    <ImageCard key={img.id} image={img} />
  ));

  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3, 4]}>{imgs}</SimpleGrid>
    </Box>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const images = await getImages('wallpapers', { limit: 25 });
  return {
    props: {
      images: JSON.stringify(images),
    },
  };
};
