const generateMarkdown = require('./utils/generateMarkdown');

// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = () => {
return inquirer.prompt([ 
    {
    type: 'input',
    name: 'projectName',
    message: 'What is your project name?'
    }, {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project.'
    }, {
    type: 'input',
    name: 'techUsed',
    message: 'What tech was used?'
    }, {
    type: 'input',
    name: 'installation',
    message: 'Breifly describe the installation process for your project.'
    }, {
    type: 'input',
    name: 'usage',
    message: 'Breifly describe the usage of this project.'
    }, {
    type: 'checkbox',
    message: 'Select license',
    name: 'license',
    choices: [
      new inquirer.Separator('### Software License ###'),
      {
       name: 'Apache License 2.0',
      }, {
       name: 'Educational Community License v2.0',
      }, {
       name: 'GNU General Public License v3.0',
      }, {
       name: 'ISC License',
      }, {
       name: 'MIT License',
      }, {
       name: 'Mozilla Public License 2.0',
      }, {
        name: 'NONE',
      } ],
    validate(answer) {
      if (answer.length < 1) {
        return 'You must choose a license or none.';
      }
      return true;
    }
    }, {
    type: 'input',
    name: 'contribution',
    message: 'Briefly describe how to contribute to this project.'
    }, {
    type: 'input',
    name: 'tests',
    message: 'Briefly describe testing of the project.'
    }, {
    type: 'input',
    name: 'ghName',
    message: 'What is your GitHub user name?'
    }, {
    type: 'input',
    name: 'ghRepo',
    message: 'What is the GitHub repo url for this project?'
    }, {
    type: 'confirm',
    name: 'installPic',
    message: 'Do you want to include a screenshot with this section?',
    }, {
    type: 'input',
    name: 'installPicDir',
    message: 'What is the relative link or url link of your screenshot?',
    when(answers) {
    return answers.installPic;
    }, },{
    type: 'input',
    name: 'qProtocol',
    message: 'What is the best way to reach you with questions? Is there a protocol for questions?'
    }
])}

// Function to write README file
const createFolder = () => {
  let dir = 'new-readme'
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
};
const init = () => {
  createFolder()
  questions()
  .then((answers) =>
  //The fs passes the two text-related functions through, with getLicenseBadge passing through readmeText.
   fs.writeFileSync(`./new-readme/README.md`, generateMarkdown(answers)))
  .then(() => console.log('Your README has been created'))
  .catch((err) => console.error(err))
};

// Function call to initialize app
init();
    
