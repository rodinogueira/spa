import React from "react";
import PropTypes from 'prop-types';

export const ModalCloseButton = ({ onClose }) => {
  return (
    <span className='modal__close-button' onClick={onClose}>close</span>
  );
};

ModalCloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
};