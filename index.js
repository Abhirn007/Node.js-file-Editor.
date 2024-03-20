// const fs = require("fs");
// const path = require("path");

// const operation = process.argv[2];
// const file = process.argv[3];
// const content = process.argv[4];
// const args = process.argv.slice(2);
// const operation = args[0];
// const file = args[1];
// const content = args.slice(2).join(' ');
const fs = require('fs');

// Retrieve command-line arguments
const args = process.argv.slice(2);
const operation = args[0];
const file = args[1];
const content = args.slice(2).join(' ');

// Function to read the contents of a file
const readFile = (filename) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
};

// Function to append content to a file
const appendFile = (filename, content) => {
    fs.appendFile(filename, content + '\n', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Content appended to the file '${filename}'`);
    });
};

// Function to delete a file
const deleteFile = (filename) => {
    fs.unlink(filename, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File '${filename}' deleted`);
    });
};

// Function to create a file
const createFile = (filename) => {
    fs.writeFile(filename, '', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File '${filename}' created`);
    });
};

// Function to rename a file
const renameFile = (oldFilename, newFilename) => {
    fs.rename(oldFilename, newFilename, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File '${oldFilename}' renamed to '${newFilename}'`);
    });
};

// Function to list all files in a directory
const listFiles = (dirname) => {
    fs.readdir(dirname, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        files.forEach(file => {
            console.log(file);
        });
    });
};
switch (operation) {
  // complete the fillowing function.
  case 'read':
    readFile(file);
    break;
case 'append':
    appendFile(file, content);
    break;
case 'delete':
    deleteFile(file);
    break;
case 'create':
    createFile(file);
    break;
case 'rename':
    const newFile = args[2];
    renameFile(file, newFile);
    break;
case 'list':
    listFiles(file);
    break;
default:
    console.log("Invalid operation."); 
  
    // console.log(`Invalid operatdefault:ion '${operation}'`);
}
