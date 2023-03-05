const URL = 'https://pixabay.com/api/';
const KEY = '32854165-2be33d3b7d62605f34b603c1a';

const FILTER =
  '?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';
function fetchImages(query, page = 1) {
  return fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`).then(
    response => response.json()
  );
}
export default fetchImages;
