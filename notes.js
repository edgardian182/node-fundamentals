console.log('Starting notes.js')

let add = (a,b) => {
  return a + b
};

let addNote = () => {
  return 'New note'
}

module.exports.add = add;
module.exports.addNote = addNote;
