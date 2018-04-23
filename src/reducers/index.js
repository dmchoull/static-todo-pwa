import { combineReducers } from 'redux';
import Todo from '../models/Todo';
import { ADD_TODO, TOGGLE_COMPLETE } from '../actions/todo';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      if (state.some(todo => todo.text === action.todo.text)) {
        return state;
      }

      return [...state, action.todo];

    case TOGGLE_COMPLETE:
      return state.map((todo) => {
        if (todo.text === action.todo.text) {
          return Todo(todo.text, !todo.complete);
        }

        return todo;
      });

    default:
      return state;
  }
};

export default combineReducers({
  todos,
});
