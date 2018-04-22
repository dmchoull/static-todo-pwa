import PropTypes from 'prop-types';

const Todo = (text, complete = false) => Object.freeze({ text, complete });

Todo.propTypes = PropTypes.shape({
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool,
});

export default Todo;
