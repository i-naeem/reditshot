import axios from 'axios';

/**
 * getSearchResults.js - Scrape the search results from reddit
 * @param {string} query - Search Keyword Terms
 * @returns {Promise<Object[]>} - List of Subreddits
 */
const getSearchResults = async query => {
  const response = await axios.get(
    'https://reddit.com/subreddits/search.json?limit=100&q=' + query
  );

  return response.data.data.children.map(child => ({
    id: child.data.id,
    url: child.data.url,
    title: child.data.title,
    subscribers: child.data.subscribers,
    description: child.data.public_description,
    prefixedName: child.data.display_name_prefixed,
    icon: child.data.community_icon || child.data.icon_img,
  }));
};

export default getSearchResults;
