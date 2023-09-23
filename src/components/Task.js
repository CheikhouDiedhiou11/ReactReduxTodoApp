// src/components/Task.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todoActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(task.id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      <span>{task.description}</span>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
};

export default Task;
