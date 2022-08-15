// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  }
  if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  };

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return` 
  # ${data.title}

# Table of Contents
* [Usage](#usage)
* [Licenses](#licenses)
* [Contribution](#contribution)
* [Test](#test)
* [Description](#description)
* [Contact Me](#contact-me)

## Contribution:
${data.contributions}

## Description:
${data.description}

## Usage:
${data.usage}

## License:
${data.license} ${renderLicenseBadge(data.license)}

## Test:
${data.test}


# Contact-Me
* Name -  ${data.name}
* Email - ${data.email}
* Github - (https://github.com/${data.username}/)
`;
}


module.exports = generateMarkdown;
