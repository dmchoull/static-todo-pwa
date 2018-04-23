/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import Todo from '../models/Todo';
import styles from '../assets/stylesheets/todo_list.pcss';

const TodoItem = ({ todo, toggleComplete }) => (
  <li className={`${styles.todoItem} ${todo.complete ? styles.completed : ''}`}>
    <input
      data-testid={`complete-${todo.text}`}
      className={styles.toggle}
      type="checkbox"
      checked={todo.complete}
      onChange={() => toggleComplete(todo)}
    />
    <label>{todo.text}</label>
  </li>
);

TodoItem.propTypes = forbidExtraProps({
  todo: Todo.propTypes.isRequired,
  toggleComplete: PropTypes.func.isRequired,
});

export default TodoItem;
