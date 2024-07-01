import React from 'react';
import PropTypes from 'prop-types';

export const ContainerHeader = ({ children, ...rest }) => (
  <div className="container__header" {...rest}>
    {children}
  </div>
);

ContainerHeader.propTypes = {
  children: PropTypes.node,
};
