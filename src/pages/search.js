import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SubredditCard from '../components/SubredditCard';
import getSearchResults from '../lib/getSearchResults';

export default function Search({ results }) {
  const router = useRouter();
  const { status, error, data } = JSON.parse(results);

  if (error) {
    return <h1>{error}</h1>;
  }

  const subreddits = data.map(subreddit => (
    <SubredditCard key={subreddit.id} subreddit={subreddit} />
  ));

  return (
    <Container maxW='container.lg'>
      <Box py='8'>
        <Heading>Search results for {router.query.q}</Heading>
      </Box>
      <SimpleGrid columns={1}>{subreddits}</SimpleGrid>
    </Container>
  );
}

export const getServerSideProps = async context => {
  let results = {
    status: 200,
    error: null,
    data: null,
  };

  try {
    const { q } = context.query;
    const searchResult = await getSearchResults(q);
    results.data = searchResult;
  } catch (error) {
    console.log(error);
    results.status = 401;
    results.error = error.message;
  }

  return {
    props: {
      results: JSON.stringify(results),
    },
  };
};
