const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme= require("./utils/generateReadMe");
const writeFileAsync = util.promisify(fs.writeFile);

//User prompt questions to populate ReadMe.md

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name:"projectTitle",
            message:"Enter the Title of your project:",
        },

        {
            type: "input",
            name: "description",
            message: "Give a brief description of your project:"
        },

        {
            type: "input",
            name: "installation",
            message: "Enter a description of the installation process:",
        },

        {
            type: "input",
            name: "usage",
            message: "Describe the usage of your project:",
        },
        {
            type: "list",
            name: "license",
            message: "Select an appropriate license for your project with Arrow Keys:",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
            ]
        },

        {
            type: "input",
            name: "contributors",
            message: "If any, list the contributors for this project:",
        },

        {
            type: "input",
            name: "username",
            message: "Enter Github username:",

        },
        {
            input: "input",
            name: "email",
            message: "Enter Email Address:",
        }
    ]);
} 


async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/ReadMe.md', generateContent);
        console.log('ReadMe.md has been created and can be viewed in the dist/ directory!');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  