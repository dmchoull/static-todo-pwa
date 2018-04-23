import { combineReducers } from 'redux';
import Todo from '../models/Todo';
import { ADD_TODO, COMPLETE_TODO } from '../actions/todo';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      if (state.some(todo => todo.text === action.todo.text)) {
        return state;
      }

      return [...state, action.todo];

    case COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.text === action.todo.text) {
          return Todo(todo.text, true);
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
