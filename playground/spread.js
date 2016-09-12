// function add(a, b){
//   return a + b;
// }
//
// console.log(add(2,3));
//
// var toAdd = [8, 3];
//
// console.log(add(...toAdd));

// var groupA = ['patrick', 'pickle', 'hootchie'];
//
// var groupB = ['moxxi'];
//
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Karen', 48];
var person2 = ['Patrick', 45];

function greet(name, age){
  console.log("hi " + name + ' you are ' + age);
}

greet(...person);
greet(...person2);

var names = ['Patrick', 'Pickle'];
var final = ['Karen', ...names];

final.forEach(function(name){
  console.log("hi " + name);
});
