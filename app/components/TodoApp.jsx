var React = require('react');
var TodoList = require('TodoList');

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
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
