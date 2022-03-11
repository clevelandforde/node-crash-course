const fs = require('fs');

const reading = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' }); // By passing in the second argument which is an option object we eliminate the need to pass .toString to chunk packet like this console.log(chunk.toString) and just pass chunk. This mean it will be utf8 encoded and automatically be in a readable format
const writing = fs.createWriteStream('./docs/blogs4.txt');

// reading.on('data', (chunk) => {
//   console.log('======NEW CHUNK======');
//   console.log(chunk);
//   writing.write('\n\n NEW WRITE CHUNK \n\n');
//   writing.write(chunk);
//   // A shorter way compare to this block of code is via pipe, see below
// });

// Piping
reading.pipe(writing); //This one line of code performs essentially the same task as the six lines above
