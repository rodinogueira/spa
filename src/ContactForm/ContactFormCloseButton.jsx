import React from 'react';
import PropTypes from 'prop-types';

const ContactFormCloseButton = ({ onClose }) => {
  return <button onClick={onClose}>Close</button>;
};

ContactFormCloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ContactFormCloseButton;
