import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import TodoList from '../../src/containers/TodoList';
import reducer from '../../src/reducers';

function renderWithRedux(ui, { initialState, store = createStore(reducer, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe('TodoList', () => {
  test('renders todos', () => {
    const initialState = { todos: ['item 1', 'item 2'] };
    const { queryByText } = renderWithRedux(<TodoList />, { initialState });

    expect(queryByText('item 1')).toBeInTheDOM();
    expect(queryByText('item 2')).toBeInTheDOM();
    expect(queryByText('item 3')).not.toBeInTheDOM();
  });
});
