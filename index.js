//Import Node Modules
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;

//Array of Questions that User is Asked
const questions = [
  'What is the name of your project?',
  'What is your project description?',
  'Please Enter Your Table of Contents (Separate By Commas and Do Not Include Spaces)',
  'Please Insert Link to Application Demo',
  'Any instructions for how to install/run application?',
  'How should others use your application?',
  'Any license for this application?',
  'Who contributed to this application and what did they do? Please be sure to list links to their Github Profiles.',
  'What tests did you have to perform to get this application to work?',
  'What is the link to your github profile?'
];

//Prompt User with Questions from Questions Array
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'content',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'demo',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'install',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'license',
      message: questions[6],
    },
    {
      type: 'input',
      name: 'contributing',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[8],
    },
    {
    type: 'input',
    name: 'questions',
    message: questions[9],
    }
  ]);
};
//Init Function that starts the application itself
function init() {
  promptUser()
  .then((data) => {
    const markdownContent = generateMarkdown(data);
    return writeFile(`${data.name}.md`, markdownContent);
  })
  .then(() => console.log(`Successfully created README.md!`))
  .catch((err) => console.error(err))
}
//Calling init function to start application
init();