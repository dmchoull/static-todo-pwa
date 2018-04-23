export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

export const completeTodo = todo => ({
  type: COMPLETE_TODO,
  todo,
});
