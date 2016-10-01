import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDw2ObVua4FMB5XN7k0XqiTvaqLvo83udA",
  authDomain: "karen-todo-app.firebaseapp.com",
  databaseURL: "https://karen-todo-app.firebaseio.com",
  storageBucket: "karen-todo-app.appspot.com",
  messagingSenderId: "520197343286"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Karen',
    age: 48
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child added', snapshot.key, snapshot.val());
});
todosRef.on('child_changed', (snapshot) => {
  console.log('child changed', snapshot.key, snapshot.val());
});
todosRef.on('child_removed', (snapshot) => {
  console.log('child removed', snapshot.key, snapshot.val());
});

todosRef.push ({
  text: "blah blah blah"
});
todosRef.push ({
  text: "bonk bonk bonk"
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'poom/boop the cat'
// });


//
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('user ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Pickle'});
//
// firebaseRef.child('app').update({name: 'something something darkside'})

//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('got entire datbase', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value', e);
// });
// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// firebaseRef.child('isRunning').remove();
//
// firebaseRef.child('user').update({
//   age: null
// });

//use remove method to remove something
// firebaseRef.child('app/name').remove();

//or set value to null to remove something
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });



//multipath updates
// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Patrick'
// });

// firebaseRef.child('app').update({
//   name: 'todo application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Patrick'
// });


// firebaseRef.child('app').update({
//   name: 'Todo Application',
//   version: '1.1.0'
// }).then(() => {
//   console.log('update worked');
// }, (e) => {
//   console.log('update failed');
// });
