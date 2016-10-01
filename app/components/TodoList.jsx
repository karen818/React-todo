var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0){
        return (
          <p className='container__message'>Nothing to do. Yay!</p>
        )
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }

});


//connects the store to an individual component
export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
