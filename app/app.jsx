var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configStore').configure();

store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo("boop the dogs"));
store.dispatch(actions.setSearchText('dogs'));
store.dispatch(actions.toggleShowCompleted());

//Load foundation

$(document).foundation();

// app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    <TodoApp/>
  </div>,
    document.getElementById('app')
);
