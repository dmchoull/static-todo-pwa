import deepFreeze from 'deep-freeze';
import reducer from '../../src/reducers';
import { addTodo } from '../../src/actions/todo';

describe('todos reducer', () => {
  const state = deepFreeze({ todos: ['item 1'] });

  it('returns the current state given an unknown action', () => {
    const newState = reducer(state, { type: 'unknown' });
    expect(newState).toBe(state);
  });

  it('adds a new todo when given an ADD_TODO action', () => {
    const newState = reducer(state, addTodo('item 2'));
    expect(newState.todos).toEqual(['item 1', 'item 2']);
  });

  it('does not add a todo if it already exists', () => {
    const newState = reducer(state, addTodo('item 1'));
    expect(newState.todos).toEqual(['item 1']);
  });
});
