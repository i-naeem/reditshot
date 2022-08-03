import { Avatar, Text, Box, Link, Flex } from '@chakra-ui/react';

const SubredditCard = props => {
  const { subreddit } = props;
  return (
    <Box py='2' boxShadow='base' p='2' mb='2' borderRadius='md'>
      <Flex alignItems='center'>
        <Avatar
          name={subreddit.title}
          src={subreddit.icon}
          variant='box'
          size='sm'
        />

        <Box pl='2'>
          <Link
            fontSize='md'
            fontWeight='bold'
            href={subreddit.url}
            title={subreddit.title}
          >
            {subreddit.prefixedName}
          </Link>
          <Text fontSize='sm' color='gray'>
            {subreddit.description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SubredditCard;
