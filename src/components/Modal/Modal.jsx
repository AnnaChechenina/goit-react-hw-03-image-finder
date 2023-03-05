import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { BsXLg } from 'react-icons/bs';
import css from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string,
    currentImageDescription: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickOverlay = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { title, onClose, currentImageUrl, currentImageDescription } =
      this.props;

    return createPortal(
      <div className={css.overlay} onClick={this.handleClickOverlay}>
        <div className={css.modal}>
          <div className={css.wrapper}>
            {title && <h1 className={css.title}>{title}</h1>}
            <button className={css.button} type="button" onClick={onClose}>
              <BsXLg className={css.icon} />
            </button>
          </div>
          <img
            src={currentImageUrl}
            alt={currentImageDescription}
            loading="lazy"
          />
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;