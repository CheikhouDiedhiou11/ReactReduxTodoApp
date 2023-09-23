// src/reducers/todoReducer.js

const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              description: action.description,
              isDone: false,
            },
          ],
        };
  
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
          ),
        };
  
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.id),
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;
  