import { combineReducers } from 'redux';
import { ADD_TODO } from '../actions/todo';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    default:
      return state;
  }
};

export default combineReducers({
  todos,
});
