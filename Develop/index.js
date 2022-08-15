// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// array containing all of the questions for the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        // validate to make sure a value is entered
        validate: (value)=>{ if(value){return true} else {return 'Please enter a title'}},
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short description of your project.',
        validate: (value)=>{ if(value){return true} else {return 'Please enter a description'}},
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter the GitHub username for all contributors to your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the languags used in this project.',
    },
    {
        type: 'input',
        name: 'test',  
        message: 'Enter the test command for this project.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        // validate to make sure a value is entered
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.',
        // validate to make sure a value is entered
        validate: (value)=>{ if(value){return true} else {return 'Enter a GitHub username to continue'}},
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your full name.',
        // validate to make sure a value is entered
        validate: (value)=>{ if(value){return true} else {return 'Enter your full name to continue'}},
    },
    {
        name: 'license',
        type: 'list',
        message: 'What is the license of your project?',
        choices: ['MIT', 'ISC', 'Apache', 'GPL', 'BSD', 'None'],
        default: 'None',
},    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if(err){
            throw err;
        }
        console.log('Successfully wrote to ' + fileName);
    }
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
    writeToFile('README.md', generateMarkdown(answers));
})
}

// Function call to initialize app
init();
