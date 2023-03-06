import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.container}>
      {images.map(({ id, tags, smallImage, largeImage }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          smallImage={smallImage}
          largeImage={largeImage}
          openModal={openModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.prototype = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string,
      smallImage: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default ImageGallery;
