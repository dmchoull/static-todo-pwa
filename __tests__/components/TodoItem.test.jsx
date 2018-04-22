import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import TodoItem from '../../src/components/TodoItem';

describe('TodoItem', () => {
  test('renders a todo', () => {
    const { container } = render(<TodoItem todo="add for attribute to label" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
