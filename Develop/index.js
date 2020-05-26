// dont forget: NPM INIT
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');

// The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
inquirer.prompt({
    message: 'Enter your Github username:',
    name: "username"
})
    .then(function ({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
        // make an API request to githubs API to get the users repos
        axios.get(queryUrl).then((response) => {
            // get the name of each repository as a string
            const repoNames = response.data.map((repo) => {
                return repo.name;
            });
            console.log(repoNames);
        });


    });

const questions = ([
    // this is going to be an array of quesitons
    // What is the project title? [string]
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    // What is your Description? [string]
    {
        type: 'input',
        name: 'description',
        message: 'What does your project do?',
    },
    // What is your table of Contents? [Array: string] or an object
    {
        type: 'input',
        name: 'toc',
        message: 'What is in your table of contents?',
    },
    // How to install: [string]
    {
        type: 'input',
        name: 'installation',
        message: 'How do you get the application running?',
    },
    // What is your usage? [string]
    {
        type: 'input',
        name: 'use',
        message: 'How is the application used?',
    },
    // What is your license? "MIT" [string]
    {
        type: 'input',
        name: 'license',
        message: 'What is your license?'
    },
    // Who are the contributors? Array: String["Michael Veiga", "Dave Allen"]
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    // What are your Tests? [string] (markdown: formatted?)
    {
        type: 'input',
        name: 'tests',
        message: 'Provide an example of how to run your code',
    },
    // What are your Questions? [Array: string]: [What is the meaning of life? "how do I install this application?"]
    {
        type: 'input',
        name: 'questions',
        message: 'Is there anything wrong with the application?',
    },
    // What is your github profile picture? [string]
    // What is your github email? [string]
]

function writeToFile(fileName, data) {
    // where do I wqant the file to be placed? Desktop? Local directory? Do i need to check?
    // create a file with name fileName
    // write to file fileName the data 
}

function init() {
    // initialize stuff that I need here
}

init();
