import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const ContainerSubTitle = ({ children, className, ...rest }) => (
  <h3 className={className} {...rest}>{children}</h3>
);

ContainerSubTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
