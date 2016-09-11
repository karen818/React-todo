var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return{
      todos: [
        {
          id: 1,
          text: 'Walk the dogs'
        },
        {
          id: 2,
          text: "Kiss the hubby"
        },
        {
          id: 3,
          text: 'Poom the cat'
        },
        {
          id: 4,
          text: "Clean all the things"
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text)
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <h1 className="page-title">TodoApp</h1>
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
