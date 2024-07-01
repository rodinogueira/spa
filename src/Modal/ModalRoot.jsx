import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types'; // Importe PropTypes

import './styles.css';

export const ModalRoot = ({ isOpened, onClose, children }) => {
  if (!isOpened) {
    return null;
  }

  return createPortal(
    <div className='modal-wrapper'>
      <div className='modal__overlay' onClick={onClose}></div>
      <div className='modal__container'>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

ModalRoot.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalRoot;
