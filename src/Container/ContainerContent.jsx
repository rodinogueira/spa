import React from 'react';
import PropTypes from 'prop-types';

export const ContainerContent = ({ children, tasks, onDrop, onDragOver, onClearTasks, updateTask, deleteTask }) => {
  return (
    <div className='container-content' onDrop={onDrop} onDragOver={onDragOver}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { tasks, onClearTasks, updateTask, deleteTask })
      )}
    </div>
  );
};

ContainerContent.propTypes = {
  children: PropTypes.node,
  tasks: PropTypes.arrayOf(PropTypes.object),
  onDrop: PropTypes.func,
  onDragOver: PropTypes.func,
  onClearTasks: PropTypes.func,
  updateTask: PropTypes.func,
  deleteTask: PropTypes.func,
};
