const people = ['pat', 'tim', 'jim', 'sam', 'sue', 'raj']; // It doesn't matter that this const is called people and the one in module is called xyz, only if using destructing which we will do now in modules.js file.
const ages = [72, 35, 59, 30, 30, 31];

console.log(people);

module.exports = 'hello'; // What ever value we set this to be is the value the constant xyz = require(./people) in modules.js will get, so here it will return 'hollo'.
module.exports = people; // exporting a single thing/constant
module.exports = { people, ages }; // If we want to export multiple different things, we can let the module.export equal an object ({}). When the const and what you are exporting have the same name then you don't have to do {ages:ages} just {ages}
