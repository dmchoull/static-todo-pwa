import deepFreeze from 'deep-freeze';
import reducer from '../../src/reducers';
import { addTodo, toggleComplete } from '../../src/actions/todo';
import Todo from '../../src/models/Todo';

describe('todos reducer', () => {
  const initialState = deepFreeze({
    todos: [Todo('item 1')],
  });

  it('returns the current state given an unknown action', () => {
    const newState = reducer(initialState, { type: 'unknown' });
    expect(newState).toBe(initialState);
  });

  describe('ADD_TODO', () => {
    it('adds a new todo when given an ADD_TODO action', () => {
      const newState = reducer(initialState, addTodo(Todo('item 2')));
      expect(newState.todos).toEqual([Todo('item 1'), Todo('item 2')]);
    });

    it('does not add a todo if it already exists', () => {
      const newState = reducer(initialState, addTodo(Todo('item 1')));
      expect(newState).toEqual(initialState);
    });
  });

  describe('TOGGLE_COMPLETE', () => {
    it('changes an active todo to completed', () => {
      const newState = reducer(initialState, toggleComplete(Todo('item 1')));
      expect(newState.todos).toEqual([Todo('item 1', true)]);
    });

    it('changes a completed todo to active', () => {
      const state = deepFreeze({
        todos: [Todo('item 1', true)],
      });

      const newState = reducer(state, toggleComplete(Todo('item 1', true)));
      expect(newState.todos).toEqual([Todo('item 1')]);
    });
  });
});
