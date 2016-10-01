var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    console.log('clicked');
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      console.log('clicked');
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit} ref="form" className="add-todo">
          <input type="text" ref="todoText" placeholder="Enter todo item"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
