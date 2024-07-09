// import the 'path' module, which provides utilities for working with file and directory paths....
const path = require('path');

// log the platform-specific file separator...
// On Windows, this will be '\', on UNIX-based systems, it will be '/'.....
console.log(path.sep);

//  path.join() is used to create a normalized path string....
// this method is preferred over manually concatenating path segments.....
// as it handles the correct use of separators across different operating systems.....
const filePath = path.join('/content/', 'subfolder', 'text.txt');
console.log(filePath);

// extract the base name (the last portion) of the path
// in this case, it will return 'text.txt'
const base = path.basename(filePath);
console.log(base);

// create an absolute path using path.resolve()
// __dirname is a global variable that represents the directory of the current module
// path.resolve() resolves a sequence of paths or path segments into an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);