// generateReadme function fills ReadMe.md with content
function generateReadme(answers) {
    return `
# ${answers.projectTitle}

## Description
    ${answers.description}
## Table of Contents:
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributors](#Contributors)
- [Github&&Contact-Info](#Github&&Contact-Info)

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