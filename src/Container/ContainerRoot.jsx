import React from 'react';
import PropTypes from 'prop-types';

export const ContainerRoot = ({ children, borderColor, ...rest }) => {
  const childrenWithProps = React.Children.map(children, child => 
    React.cloneElement(child, rest)
  );

  return (
    <div className='container' style={{ borderTop: `5px solid ${borderColor}` }}>
      {childrenWithProps}
    </div>
  );
};

ContainerRoot.propTypes = {
  children: PropTypes.node.isRequired,
  borderColor: PropTypes.string.isRequired,
};