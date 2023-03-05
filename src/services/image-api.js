const URL = 'https://pixabay.com/api/';
const KEY = '32854165-2be33d3b7d62605f34b603c1a';

const FILTER = 'image_type=photo&orientation=horizontal&per_page=12';

function fetchImages(query, page = 1) {
  return fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`).then(
    response => {
      const { hits, totalHits } = response.json();
      const images = hits.map(({ id, tags, webformatURL, largeImageURL }) => ({
        id: id,
        description: tags,
        smallImage: webformatURL,
        largeImage: largeImageURL,
      }));
      return { images, totalImages: totalHits };
    }
  );
}
export default fetchImages;
