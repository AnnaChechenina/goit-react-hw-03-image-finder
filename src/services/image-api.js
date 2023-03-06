import axios from 'axios';

const URL = 'https://pixabay.com';
const KEY = '32854165-2be33d3b7d62605f34b603c1a';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(
    `${URL}/api/?q=${query}&page=${page}&key=${KEY}$image_type=photo&orientation=horizontal&per_page=12`
  );
  const images = response.data.hits.map(
    ({ id, tags, webformatURL, largeImageURL }) => {
      return {
        id,
        tags,
        webformatURL,
        largeImageURL,
      };
    }
  );
  return { images, totalImages: response.data.totalHits };
};
