import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export const ContactFormRoot = ({ children }) => {

  return (
    <div className='contact-form'>
        {children}
    </div>
  );
};

ContactFormRoot.propTypes = {
  children: PropTypes.node.isRequired,
};