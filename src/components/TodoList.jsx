import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import styles from '../assets/stylesheets/todo_list.pcss';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string),
    addTodo: PropTypes.func.isRequired,
  };

  static defaultProps = {
    todos: [],
  };

  handleKeyDown = (e) => {
    if (e.keyCode !== 13) {
      return;
    }

    const input = e.target;
    this.props.addTodo(input.value);
    input.value = '';
  };

  render() {
    const { todos } = this.props;
    return (
      <div className={styles.todoapp}>
        <header className={styles.header}>
          <h1>todos</h1>
          <input
            className={styles.newTodo}
            data-testid="add-todo"
            type="text"
            placeholder="What needs to be done?"
            onKeyDown={this.handleKeyDown}
          />
        </header>

        <section className={styles.main}>
          <ul className={styles.todoList}>
            {todos.map(todo => <TodoItem key={todo} todo={todo} />)}
          </ul>
        </section>
      </div>
    );
  }
}
