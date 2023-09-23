// src/actions/todoActions.js

export const addTodo = (description) => ({
    type: 'ADD_TODO',
    description,
  });
  
  export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id,
  });
  