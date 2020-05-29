// dont forget: NPM INIT
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

// The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
inquirer
  .prompt({
    message: "Enter your Github username:",
    name: "username",
  })
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    // make an API request to githubs API to get the users repos
    axios.get(queryUrl).then((response) => {
      // get the name of each repository as a string
      console.log(response.data.avatar_url);
      callQuestions(response.data.avatar_url);
    });
  });

const questions = [
  // this is going to be an array of quesitons
  // What is the project title? [string]
  {
    type: "input",
    name: "title",
    message: "What is the name of your repo?",
  },
  // What is your Description? [string]
  {
    type: "input",
    name: "description",
    message: "Description of your repo?",
  },
  // How to install: [string]
  {
    type: "input",
    name: "installation",
    message: "Instructions on how to install the dependencies for your repo.",
  },
  // What is your usage? [string]
  {
    type: "input",
    name: "use",
    message: "How is the application used?",
  },
  // What is your license? "MIT" [string]
  {
    type: "input",
    name: "license",
    message: "What license does this repo have?",
  },
  // Who are the contributors? Array: String["Michael Veiga", "Dave Allen"]
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to this project?",
  },
  // What are your Tests? [string] (markdown: formatted?)
  {
    type: "input",
    name: "tests",
    message:
      "How do you run th tests on this repo (assuming the testing has been implemented)",
  },
  // What are your Questions? [Array: string]: [What is the meaning of life? "how do I install this application?"]
  {
    type: "input",
    name: "questions",
    message: "Who to contact for questions about the repo and how?",
  },
  // What is your github profile picture? [string]
  // What is your github email? [string]
];

function callQuestions(profilePic) {
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
    let createReadMe = (answers) => {
      return `
# Project Title: ${answers.title}
## Description 
${answers.description}
## Table of Contents 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Licenses](#Licenses)
* [Contributors](#Contributors)
* [Testing](#Testing)
* [Questions](#Questions)
## Installation: 
${answers.installation}
## Usage 
${answers.use}
## Licenses 
${answers.license}
## Contributors 
![Image of contributor](${profilePic})

${answers.contributors}
## Testing 
${answers.tests}
## Questions 
${answers.questions}
      `;
    };
    fs.writeFile("README.md", createReadMe(answers), function (err) {
      if (err) {
        throw err;
      }
      console.log("Your README has been created!");
      // where do I wqant the file to be placed? Desktop? Local directory? Do i need to check?
      // create a file with name fileName
      // write to file fileName the data
    });
  });
}

// fs.writeFile(fileName, data) {
// where do I wqant the file to be placed? Desktop? Local directory? Do i need to check?
// create a file with name fileName
// write to file fileName the data
// }

// function init() {
// initialize stuff that I need here
// }

// init();
