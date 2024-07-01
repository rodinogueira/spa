import React from 'react';
import PropTypes from 'prop-types';

export const ModalTitle = ({ children }) => (
  <h2 className="modal__title">{children}</h2>
);

ModalTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
