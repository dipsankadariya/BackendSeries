// destructuring to import specific methods from the 'fs' module
const { readFileSync, writeFileSync } = require('fs');
// alternatively: const fs = require('fs');
console.log('start'); 

// read contents of 'first.txt' synchronously
const first = readFileSync('./content/first.txt', 'utf8');

// read contents of 'second.txt' synchronously
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

// write to 'result-sync.txt', appending content
writeFileSync(
    './content/result-sync.txt',
    `result : ${first},${second}`,
    { flag: 'a' }
);
console.log("task done");
console.log("starting next task");

//everhing will synchronously run in order.