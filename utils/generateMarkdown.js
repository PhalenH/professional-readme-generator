// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return;
  // this project is licensed under ${data.license}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Licensing:
  ![license]()

  ## Description: 
  ${data.description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test Instructions](#Test Instructions)
  - [Questions](#Questions)

  ## Installation: 
  ${data.installation}

  ## Usage: 
  ${data.usage}

  ## License
  This application is covered under: ${data.license} license.

  ## Contributing: 
  ${data.contributing}

  ## Test Instructions: 
  ${data.test}

  ## Questions
  - If you have any questions, email me at ${data.email}
  - Checkout my GitHub profile [here](https://github.com/${data.github})

`;
}

// readme should include:
// # project title (y)
// ## descpription (y)
// ## Installation (y)
// ## Usage (y)
// ## How to contribute (y)
// ## test instructions (y)
// ## Credits -different function
// ## License -different function, multiple so will have to choose (

// ## Badges - there should be a badge for every license
// there's a badge for everything on github. look up list of badges

// ## Link to deployed repo
// ## screenshot of deployed repo

module.exports = generateMarkdown;
