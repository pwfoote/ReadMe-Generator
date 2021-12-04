// generateReadme function fills ReadMe.md with content
function generateReadme(answers) {
    return `
# ${answers.projectTitle}

## Description
    ${answers.description}
## Table of Contents:
- [Description]
- [Installation]
- [Usage]
- [License]
- [Contributing]
- [Github&&Contact-Info]

## Installation
    ${answers.installation}

## Usage
 ${answers.usage}

## License
This application uses the ${answers.license} license. 
![badge](https://img.shields.io/badge/license-${answers.license}-blue)
## Contributors
    ${answers.contributors}

## GitHub&&Contact-Info: [${answers.username}](https://github.com/${answers.username})

 Contact me @: ${answers.email}
    `;
  }
  
  module.exports = generateReadme;