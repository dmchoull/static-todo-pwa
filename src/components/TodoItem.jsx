/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { forbidExtraProps } from 'airbnb-prop-types';
import Todo from '../models/Todo';
import styles from '../assets/stylesheets/todo_list.pcss';

const TodoItem = ({ todo }) => (
  <li className={styles.todoItem}>
    <input className={styles.toggle} type="checkbox" />
    <label>{todo.text}</label>
  </li>
);

TodoItem.propTypes = forbidExtraProps({
  todo: Todo.propTypes.isRequired,
});

export default TodoItem;
