// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const generateReadme = (answers) =>
``

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the Project you created',  
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please describe installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please add usage information',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please describe the contribution guidelines',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please include test instructions.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?',
        },

    ])
    .then((answers) => {
        const readmeContent = generateReadme(answers);
    })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
