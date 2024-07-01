import React from 'react';
import PropTypes from 'prop-types';

export const ContactFormInputGroup = ({
  label,
  type,
  placeholder,
  required,
}) => (
  <div className="contact-form__input-group">
    <label htmlFor={label} className="contact-form__label">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="contact-form__input"
    />
  </div>
);

ContactFormInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};
