// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
// readme should include:
// # project title
// ## descpription
// ## Installation
// ## Usage
// ## Credits -different function
// ## License -different function
// ## Badges
// ## Features
// ## How to contribute (?)
// ## Link to deployed repo
// ## screenshot of deployed repo 

module.exports = generateMarkdown;

//  module.exports = {
//   generateMarkdown,
//   renderLicenseBadge,
//   renderLicenseLink,
//   renderLicenseSection,
//  };