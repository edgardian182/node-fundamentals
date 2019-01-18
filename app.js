console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.uniq([2,3,'ed','ed']))

console.log(_.isString(true))
console.log(_.isString('hola'))

let sum = notes.add(2, 4);
console.log(sum);


let user = os.userInfo()
//
fs.appendFile('greetings.txt', `\nHello ${user.username}!`, function (err) {
  if (err) {
    console.log('Unable to write to file');
  } else {
    console.log('Your note has been added');
  }
});
