// Packages required to run application
const inquirer = require('inquirer');
const fs = require('fs')
const generateLogo = require('./lib/shapes').generateLogo;
// Array of questions for user input
const questions = [
    {
        message: 'Enter up to 3 characters for your logo.',
        name: 'text',
    },
    {
        message: 'Enter a text color for your logo.',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Select a shape for your logo.',
        name: 'shape',
        choices: [ 'circle', 'triangle', 'square']
    },
    {
        message: 'Enter a shape color for your logo.',
        name: 'shapeColor',
    },
];
// Function to write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log(`Wrote data to ${fileName}`));
}
// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile('./examples/logo.svg', generateLogo(response)));
}

init ();