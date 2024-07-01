import React from 'react';
import PropTypes from 'prop-types';

export const ContainerDescription = ({ children, className, ...rest }) => (
  <p className={className} {...rest}>{children}</p>
);

ContainerDescription.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
