// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];
// maybe just do inquirer instead
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Provide a short description explaining the what, why, and how of your project:",
      name: "description",
    },

    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    // can use a recursion loop, will loop until user types in done or hits enter with an empty string
    // have to create a function for recursion to work or it won't run
    {
      type: "input",
      message: "Provide instructions and examples for use:",
      name: "usage",
    },
    {
      type: "input",
      message: "Provide guidelines on how to contribute to your project:",
      name: "contributing",
    },
    {
      type: "input",
      message: "Provide examples on how to run tests for your project:",
      name: "test",
    },
    {
      type: "list",
      message: "Select a license for your project:",
      name: "license",
      choices: ["none", "Apache", "MIT", "GNU", "ISC", "SIL Open Font"],
    },
    {
      type: "input",
      message: "Enter your GitHub username:",
      name: "github",
    },
    {
      type: "input",
      message: "Enter your email:",
      name: "email",
    },
  ])
  .then((response) => {
    console.log(response);

    fs.writeFileSync("UserREADME.md", generateMarkdown(response));
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
