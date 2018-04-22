/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import styles from '../assets/stylesheets/todo_list.pcss';

const TodoItem = ({ todo }) => (
  <li className={styles.todoItem}>
    <input className={styles.toggle} type="checkbox" />
    <label>{todo}</label>
  </li>
);

TodoItem.propTypes = forbidExtraProps({
  todo: PropTypes.string.isRequired,
});

export default TodoItem;
