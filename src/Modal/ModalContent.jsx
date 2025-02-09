import React from 'react';
import PropTypes from 'prop-types';

export const ModalContent = ({ children }) => (
  <div className="modal__content">{children}</div>
);

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
};
