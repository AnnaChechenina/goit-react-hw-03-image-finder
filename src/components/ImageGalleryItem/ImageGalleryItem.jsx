import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
function ImageGalleryItem({ tags, smallImage, largeImage, openModal }) {
  return (
    <li className={css.item} onClick={openModal}>
      <img src={smallImage} alt={tags} data-large={largeImage} />
    </li>
  );
}
ImageGalleryItem.prototype = {
  tags: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
