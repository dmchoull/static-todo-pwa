import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, Simulate } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import TodoList from '../../src/containers/TodoList';
import reducer from '../../src/reducers';
import todo from '../../src/models/Todo';

function renderWithRedux(ui, { initialState, store = createStore(reducer, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe('TodoList', () => {
  test('renders todos', () => {
    const initialState = { todos: [todo('item 1'), todo('item 2')] };
    const { queryByText } = renderWithRedux(<TodoList />, { initialState });

    expect(queryByText('item 1')).toBeInTheDOM();
    expect(queryByText('item 2')).toBeInTheDOM();
    expect(queryByText('item 3')).not.toBeInTheDOM();
  });

  test('adding a new item', () => {
    const initialState = { todos: [todo('item 1')] };
    const { queryByText, getByTestId } = renderWithRedux(<TodoList />, { initialState });

    const input = getByTestId('add-todo');
    input.value = 'item 2';
    Simulate.change(input);
    Simulate.keyDown(input, { key: 'Enter', keyCode: 13 });

    expect(queryByText('item 1')).toBeInTheDOM();
    expect(queryByText('item 2')).toBeInTheDOM();
    expect(input.value).toEqual('');
  });
});
