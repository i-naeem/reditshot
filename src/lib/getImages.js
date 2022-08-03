/**
 * getImages.js
 * Scrape images from reddit.
 */

import getRandomUserAgent from '../utils/getRandomUserAgent';
import axios from 'axios';

/**
 * @typedef Image
 * @property {string} id - A unique id of image
 * @property {string} title - Title of the image
 * @property {string} author - Author of the image
 * @property {boolean} isAdult -  Is image is 18+
 * @property {boolean} isSpoiler - Does image contain any spoiler
 * @property {string} path - Viewable or downloadable link of the image src for img
 * @property {string} source - Link of the original post
 */

/**
 * getImages: Fetch Images from Subreddit.
 * @param {string} subreddit - Subreddit name
 * @param {Object} Params
 * @returns {Promise<Image[]>}
 */
const getImages = async (subreddit, { limit = 1, sort = 'new' } = {}) => {
  if (!subreddit) {
    throw new Error('Subreddit argument can not be undefined');
  }

  const url = new URL(`https://www.reddit.com/r/${subreddit}/new.json`);
  url.searchParams.set('limit', limit);
  url.searchParams.set('sort', sort);

  const endpoint = url.href;
  const response = await axios.get(endpoint, {
    headers: {
      'User-Agent': getRandomUserAgent(),
    },
  });

  const posts = response.data.data.children;
  let images = [];

  for (let post of posts) {
    if (post.data.is_gallery) {
      const galleryImages = post.data.gallery_data.items.map(image => ({
        id: image.media_id,
        title: post.data.title,
        author: post.data.author,
        isAdult: post.data.over_18,
        isSpoiler: post.data.spoiler,
        path: `https://i.redd.it/${image.media_id}.jpg`,
        source: `https://reddit.com` + post.data.permalink,
      }));

      images.push(...galleryImages);
    } else if (!post.data.is_self && post.data.post_hint === 'image') {
      images.push({
        id: post.data.id,
        path: post.data.url,
        title: post.data.title,
        author: post.data.author,
        isAdult: post.data.over_18,
        isSpoiler: post.data.spoiler,
        source: `https://reddit.com` + post.data.permalink,
      });
    }
  }

  return images;
};

export default getImages;
