// generateReadme function fills README.md with content
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
- [User Tests]
- [Github && Contact Info]

## Installation
    ${answers.installation}

## Usage
 ${answers.usage}

## License
This application uses the ${answers.license} license. 

## Contributors
    ${answers.contributors}


##GitHub: [${answers.username}](https://github.com/${answers.username})

 Contact me @: ${answers.email}
    `;
  }
  
  module.exports = generateReadme;