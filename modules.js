// const xyz = require('./people'); // Importing the people file into the modules file. When we require a file, node looks for it and run it. We will copy this line now below to demonstrate destructuring
const { people, ages } = require('./people'); // DESTRUCTURING! This is the nice way to import multiple different things from different file. Now the constants here have to be name the same as the property i want access to in different file/s, which in this case is the people file

// console.log(xyz); // This constant xyz is returning an empty object before we do module.exports in people's file
// console.log(xyz.people, xyz.ages); // before destructing the name can be different
console.log(people, ages); // With destructing you have to have to same name and we dont have to do console.log(ages.ages) just ages.

// Node also comes with core modules built into it like 'os, fs' and so one and we can also require those as well for added functionality

const os = require('os');

console.log(os.homedir(), os.platform(), os.hostname()); // Type os. to see the methods that can be used on this object
