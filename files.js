// Reading files, writing files, creating and deleting directories and deleting files
const fs = require('fs'); // This is the core module (fs) we needed to import do all these interaction with the file system. This ability to interact with a file system on a computer with JavaScript is something that can't be done without node; fs stands for File System

// // // Reading files
// // fs.readFile('./docs/blog1.txt', (err, data) => {
// //   // This is asynchronous. When it is run it will fist start reading the file of the relative path - the first parameter, then move on to something else and when it is done it will return and run the second parameter which is the callback function which takes two parameter as well (err, data)
// //   if (err) {
// //     console.log(err);
// //   }
// //   console.log(data); // when we run this we get a buffer which is a package of data that is sent to us when we read the file
// //   console.log(data.toString()); // This shows the actual data
// // });
// // console.log('last line');

// // Writing files
// const greeting = 'Welcome to the Caribbean';
// const country = 'Guyana';
// fs.writeFile('./docs/blog1.txt', greeting, () => {
//   console.log('file was written');
// });
// fs.writeFile('./docs/blog2.txt', country, () => {
//   console.log('file was written');
// });

// Creating and deleting directories
// If the directory is there, don't run fs.mkdir but run instead the else statement further down this block with fs.rmdir. The top if statement avoids an error if the file already there.
if (!fs.existsSync('./assets')) {
  // Creates directory
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  // Deletes directory
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// Deleting files
// Here it wouldn't throw any error if the file is not there
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}

// These are okay if you are dealing with small files
// If working with very large files then we need to look at Streams
