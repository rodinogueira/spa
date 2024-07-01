import React from 'react';
import PropTypes from 'prop-types';

export const ContactFormSubmitButton = ({ children }) => (
  <button type='submit' className='contact-form__submit-button'>
    {children}
  </button>
);

ContactFormSubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
};
