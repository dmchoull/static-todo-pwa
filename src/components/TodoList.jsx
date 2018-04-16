import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import styles from '../assets/stylesheets/todo_list.pcss';

const TodoList = ({ todos }) => (
  <ul className={styles.todoList}>
    {todos.map(todo => <TodoItem key={todo} todo={todo} />)}
  </ul>
);

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string),
};

const TodoItem = ({ todo }) => (
  <li key={todo} className={styles.todoItem}>{todo}</li>
);

TodoItem.propTypes = forbidExtraProps({
  todo: PropTypes.string.isRequired,
});

export default TodoList;
