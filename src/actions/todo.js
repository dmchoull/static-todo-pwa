export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

export const toggleComplete = todo => ({
  type: TOGGLE_COMPLETE,
  todo,
});
