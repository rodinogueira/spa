import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export const ContainerTitle = ({ children, ...rest }) => (
  <h2 className='container__title' {...rest}>{children}</h2>
);

ContainerTitle.propTypes = {
  children: PropTypes.node.isRequired,
};