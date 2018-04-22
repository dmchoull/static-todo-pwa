import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import Todo from '../../src/models/Todo';
import TodoItem from '../../src/components/TodoItem';

describe('TodoItem', () => {
  test('renders a todo', () => {
    const { container } = render(<TodoItem todo={Todo('item 1')} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
