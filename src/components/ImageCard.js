import {
  Box,
  Collapse,
  Fade,
  Image,
  Link,
  Slide,
  Text,
} from '@chakra-ui/react';
import useHover from '../hooks/useHover';

const ImageCard = props => {
  const { image } = props;
  const [ref, isHovered] = useHover();

  return (
    <Box p='2'>
      <Box
        minHeight='200px'
        position='relative'
        ref={ref}
        sx={{
          background: `url(${image.path})`,
          backgroundSize: 'cover',
        }}
      >
        <Fade direction='bottom' in={isHovered}>
          <Box>
            <Text
              p='5px'
              left='0'
              bottom='0'
              width='100%'
              color='white'
              display='block'
              fontWeight='bold'
              fontFamily='mono'
              position='absolute'
              backgroundColor='rgba(0, 0, 0, 0.7);'
            >
              <Link target='_blank' href={image.source} title={image.title}>
                {image.title.length > 20
                  ? image.title.slice(0, 20).trim() + '...'
                  : image.title}
              </Link>

              <br />
              <Link href={'https://reddit.com/u/' + image.author} fontSize='xs'>
                @{image.author}
              </Link>
            </Text>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default ImageCard;
