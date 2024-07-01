import React from 'react';
import PropTypes from 'prop-types';

export const ModalActions = ({ children }) => (
  <div className='modal__actions'>
    {children}
  </div>
);

ModalActions.propTypes = {
  children: PropTypes.node.isRequired,
};