import { Box, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import getImages from '../lib/getImages';

const Index = ({ images = [] }) => {
  const imgs = JSON.parse(images).map(img => (
    <Box>
      <Image src={img.path} alt={img.title} height='100%' width='100%' />
    </Box>
  ));

  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3, 4]}>{imgs}</SimpleGrid>
    </Box>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const images = await getImages('wallpapers', { limit: 15 });
  return {
    props: {
      images: JSON.stringify(images),
    },
  };
};
