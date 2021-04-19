// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache2.0':
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "GPL3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "Mozilla Public 2.0":
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
    case "Eclipse":
      return "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";
    default:   
      return "";      
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GPL3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "Mozilla Public 2.0":
      return "(https://opensource.org/licenses/MPL-2.0)";
    case "Eclipse":
      return "(https://opensource.org/licenses/EPL-1.0)";
    default:
      return "";    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ${data.license}

  ## Contributors

  ${data.contributors}

  ## Tests

  ${data.tests}

  ## Contact

  [Email]: ${data.email}

  [Github Username]: ${data.github}

`;
}

module.exports = generateMarkdown;
