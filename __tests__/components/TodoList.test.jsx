import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import TodoList from '../../src/components/TodoList';

describe('TodoList', () => {
  test('renders todos', () => {
    const { queryByText } = render(<TodoList todos={['item 1', 'item 2']} />);
    expect(queryByText('item 1')).toBeInTheDOM();
    expect(queryByText('item 2')).toBeInTheDOM();
    expect(queryByText('item 3')).not.toBeInTheDOM();
  });
});
