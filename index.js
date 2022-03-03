const generateMarkdown = require('./generateMarkdown');

// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [ {
  type: 'input',
  name: 'projectName',
  message: 'What is your project name?'
}, {
type: 'input',
name: 'description',
message: 'Write a breif description of your project.'
}, {
type: 'input',
name: 'installation',
message: 'Breifly describe the installation process for your project.'
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
}, }, {
type: 'input',
name: 'usage',
message: 'Breifly describe the usage of this project.'
}, {
type: 'confirm',
name: 'usagePic',
message: 'Do you want to include a screenshot with this section?',
}, {
type: 'input',
name: 'usagePicDir',
message: 'What is the relative link or url link of your screenshot?',
when(answers) {
  return answers.usagePic;
}, }, {
type: 'list',
name: 'license',
message: 'What license are you using?',
choices: [
  'Academic Free License v3.0',
  'Apache license 2.0',
  'Creative Commons',
  'Educational Community License v2.0',
  'GNU General Public License',
  'ISC',
  'MIT',
  'Mozilla Public License 2.0',
] }, {
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
type: 'input',
name: 'qProtocol',
message: 'What is the best way to reach you with questions? Is there a protocol for questions?'
} ];
// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => {
      if (err) {
          return console.log(err);
      }
      console.log("Your README has been created")
  })
}


// Function to initialize app
function init() {
  inquirer.prompt(questions)
      .then(answers => {
          console.log(answers)
          // writeToFile('README.md',answers);
          writeToFile('./new-readme/README.md',answers);
      }
  );
}

// Function call to initialize app
init();
