import { Box, IconButton, Link, Text } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

const ImageCard = props => {
  const { image } = props;

  return (
    <Box p='1'>
      <Box
        minHeight='250px'
        position='relative'
        sx={{
          background: `url(${image.path})`,
          backgroundSize: 'cover',
        }}
      >
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
            <Link
              size='sm'
              target='_blank'
              href={image.source}
              title={image.title}
            >
              {image.excerptTitle}
            </Link>

            <br />
            <Link href={image.author.url} fontSize='xs'>
              @{image.author.uname}
            </Link>
          </Text>
          <IconButton
            as='a'
            m='2'
            right='0'
            target='_blank'
            variant='solid'
            fontSize='20px'
            href={image.path}
            position='absolute'
            download={image.title}
            colorScheme='blackAlpha'
            aria-label={`Download ${image.title}`}
            icon={<DownloadIcon />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ImageCard;
