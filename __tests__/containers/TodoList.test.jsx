import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, Simulate } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import TodoList from '../../src/containers/TodoList';
import reducer from '../../src/reducers';
import Todo from '../../src/models/Todo';

function renderWithRedux(ui, { initialState, store = createStore(reducer, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe('TodoList', () => {
  test('renders todos', () => {
    const initialState = { todos: [Todo('item 1'), Todo('item 2', true)] };
    const { queryByText } = renderWithRedux(<TodoList />, { initialState });

    expect(queryByText('item 1')).toBeInTheDOM();
    expect(queryByText('item 2')).toBeInTheDOM();
    expect(queryByText('item 3')).not.toBeInTheDOM();
  });

  test('adding a new item', () => {
    const initialState = { todos: [Todo('item 1')] };
    const { queryByText, getByTestId } = renderWithRedux(<TodoList />, { initialState });

    const input = getByTestId('add-todo');
    input.value = 'item 2';
    Simulate.change(input);
    Simulate.keyDown(input, { key: 'Enter', keyCode: 13 });

    expect(queryByText('item 1')).toBeInTheDOM();
    expect(queryByText('item 2')).toBeInTheDOM();
    expect(input.value).toEqual('');
  });

  test('completing a todo', () => {
    const initialState = { todos: [Todo('item 1'), Todo('item 2')] };
    const { getByTestId, store } = renderWithRedux(<TodoList />, { initialState });

    const checkbox = getByTestId('complete-item 2');
    checkbox.value = true;
    Simulate.change(checkbox);

    expect(store.getState().todos[1].complete).toBeTruthy();
    expect(getByTestId('todo-list')).toMatchSnapshot();
  });

  test('un-completing a completed todo', () => {
    const initialState = { todos: [Todo('item 1'), Todo('item 2', true)] };
    const { getByTestId, store } = renderWithRedux(<TodoList />, { initialState });

    const checkbox = getByTestId('complete-item 2');
    checkbox.value = false;
    Simulate.change(checkbox);

    expect(store.getState().todos[1].complete).toBeFalsy();
    expect(getByTestId('todo-list')).toMatchSnapshot();
  });
});
