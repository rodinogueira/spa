import React from 'react';
import { useAuth } from './context/AuthContext';
import PropTypes from 'prop-types';
import './ProtectedComponent.css';

const ProtectedComponent = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <div className="protected-wrapper">{children}</div>;
  }

  return <div className="protected-wrapper">{children}</div>;
};

ProtectedComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedComponent;
