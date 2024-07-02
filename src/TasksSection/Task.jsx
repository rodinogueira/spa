import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Checkbox } from '../components/Checkbox/Checkbox';
import PropTypes from 'prop-types';
import './styles.css';

const Task = ({
  id,
  text,
  done,
  index,
  moveTask,
  updateTask,
  toggleTask,
  deleteTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [isChecked, setIsChecked] = useState(false);

  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'TASK',
    hover(item) {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index;
      }
    },
  }));

  drag(drop(ref));

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    updateTask(id, { text: editedText });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
    toggleTask(id, !done);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('taskId', id);
  };

  return (
    <div
      ref={ref}
      className={'task'}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onDoubleClick={handleDoubleClick}
      onDragStart={handleDragStart}
      draggable
    >
      <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        done={done}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="task-text task-text--editing"
        />
      ) : (
        <span className="task-text">{text}</span>
      )}
      <a onClick={() => deleteTask(id)} className="task-delete-link">
        delete
      </a>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  moveTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
