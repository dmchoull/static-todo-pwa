import { connect } from 'react-redux';
import TodoItem from '../components/TodoItem';
import { toggleComplete } from '../actions/todo';

const mapDispatchToProps = dispatch => ({
  toggleComplete: todo => dispatch(toggleComplete(todo)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(TodoItem);
