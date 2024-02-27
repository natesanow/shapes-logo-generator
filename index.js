const inquirer = require('inquirer');
const fs = require('fs')
const generateLogo = require('./lib/shapes').generateLogo;

const questions = [
    {
        message: 'Enter 3 characters for your logo.',
        name: 'text',
    },
    {
        message: 'Choose a color for your logo.',
        name: 'text color',
    },
    {
        type: 'checkbox',
        message: 'Select a shape for your logo.',
        choices: [ 'Circle', 'Triangle', 'Square']
    },
    {
        message: 'Enter a shape color for your logo.',
        name: 'shapeColor',
    },
];

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => err ? console.error(err) : console.log(`Wrote data to ${fileName}`));
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile('./examples/logo.svg', generateLogo(response)));
}

init ();