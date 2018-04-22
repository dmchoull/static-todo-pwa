import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { addTodo } from '../actions/todo';

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
