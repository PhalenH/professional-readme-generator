// ![license](https://img.shields.io/badge/License-${data.license}-blue.svg)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license !== "none") {
    return `![license](https://img.shields.io/badge/License-${data.license}-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license !== "none") {
    return '[Link to Licenses](https://shields.io)'
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== "none") {
    return '## Licensing'
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (
    `# ${data.projectTitle}

  `+renderLicenseSection(data) +`
  `+renderLicenseBadge(data) +`

  `+renderLicenseLink(data) +`
  

  ## Description: 
  ${data.description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test Instructions](#Test-Instructions)
  - [Questions](#Questions)

  ## Installation: 
  ${data.installation}

  ## Usage: 
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing: 
  ${data.contributing}

  ## Test-Instructions: 
  ${data.test}

  ## Questions
  - If you have any questions, email me at ${data.email}
  - Checkout my GitHub profile [here](https://github.com/${data.github})

`
  );
}

module.exports = generateMarkdown;

// readme should include:
// # project title (y)
// ## descpription (y)
// ## Installation (y)
// ## Usage (y)
// ## How to contribute (y)
// ## test instructions (y)
// ## License -different function, multiple so will have to choose
// ## Badges - there should be a badge for every license
// there's a badge for everything on github. look up list of badges