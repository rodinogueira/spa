import React from 'react';
import PropTypes from 'prop-types';

export const ContainerClearButton = ({ children, onClick, ...rest }) => (
  <button className="container__clear-button" onClick={onClick} {...rest}>
    {children}
  </button>
);

ContainerClearButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
