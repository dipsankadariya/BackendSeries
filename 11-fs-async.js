//asynchronously....this is how its done.

// import the necessary functions from the 'fs' module
const { readFile, writeFile } = require('fs');

console.log("start");
// start reading the first file asynchronously
readFile('./content/first.txt', 'utf8', (err, result) => {
    // Check if there was an error reading the file
    if (err) {
        console.log(err);
        return;  // Exit the function if there was an error
    }
    // Store the contents of the first file
    const first = result;

    // Now read the second file asynchronously
    readFile('./content/second.txt', 'utf8', (err, result) => {
        // Check if there was an error reading the second file
        if (err) {
            console.log(err);
            return;  // Exit the function if there was an error
        }
        // Store the contents of the second file
        const second = result;

        // Write the contents of both files to a new file asynchronously
        writeFile(
            './content/result-async.txt',  // Path and name of the file to write
            `Result: ${first}, ${second}`,  // Content to write to the file
            (err) => {
                // Check if there was an error writing the file
                if (err) {
                    console.log(err);
                    return;  // Exit the function if there was an error
                }
                // If no error, log a success message
                console.log('File written successfully');
            }
        );
    });
});

// Note: The code execution continues here immediately
// It doesn't wait for the file operations to complete
console.log('This will be logged before file operations complete....');

console.log("staring the new task");


//outupt
// start
// This will be logged before file operations complete....
// staring the new task
// File written successfully

//everything is asynchronously done, if task takes time, it doenst wait for the next one
//this is a good example of callback hell.