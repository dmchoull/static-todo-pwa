import { combineReducers } from 'redux';
import { ADD_TODO } from '../actions/todo';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      if (state.some(todo => todo.text === action.todo.text)) {
        return state;
      }

      return [...state, action.todo];

    default:
      return state;
  }
};

export default combineReducers({
  todos,
});
