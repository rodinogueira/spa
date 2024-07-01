import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Checkbox = ({ checked, onChange, done }) => {
  const checkboxStyle = {
    backgroundColor: done ? '#4ac959' : null,
    borderColor: done ? '#4ac959' : null,
  };

  return (
    <input
      type='checkbox'
      checked={checked}
      onChange={onChange}
      style={checkboxStyle}
      className={`custom-checkbox ${done ? 'custom-checkbox--done' : 'custom-checkbox--todo'}`}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
};

export { Checkbox };
