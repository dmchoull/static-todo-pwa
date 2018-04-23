import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import Todo from '../../src/models/Todo';
import TodoItem from '../../src/components/TodoItem';

describe('TodoItem', () => {
  test('renders an active todo', () => {
    const { container } = render(<TodoItem todo={Todo('item 1')} toggleComplete={jest.fn()} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders a complete todo', () => {
    const { container } = render(<TodoItem todo={Todo('item 1', true)} toggleComplete={jest.fn()} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
