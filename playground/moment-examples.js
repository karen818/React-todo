var moment = require('moment');

console.log(moment().format());

// January 1, 1970 at 12:00 am -> 0
// January 1, 1970 at 12:01 am -> 60

var now = moment();

console.log('current timestamp ' + now.unix());

var timestamp = 1473696539;

var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format("ddd, MMM Do YYYY @ H:MM a"));
console.log('current moment', currentMoment.format("MMMM Do, YYYY @ h:mm A"));
