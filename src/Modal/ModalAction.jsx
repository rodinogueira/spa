import React from 'react';
import PropTypes from 'prop-types';

export const ModalAction = ({ onClick, children }) => (
  <button className='modal__action' onClick={onClick}>
    {children}
  </button>
);

ModalAction.propTypes = {
  onClick: PropTypes.func.isRequired, // Adicione PropTypes para onClick
  children: PropTypes.node.isRequired, // Adicione PropTypes para children
};