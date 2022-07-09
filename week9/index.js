const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generate-markdown');
const fs = require('fs/promises');
const path = require('path');

// Goal : generate a readme file for future projects


// questions to ask:

inquirer.prompt([
  {
    type: 'input',
    message: "What is the project title?",
    name: 'title',
  },
  {
    type: 'list',
    message: "What is the license?",
    name: 'license',
    choices: [
      'MIT', 'GPL-v2', 'Apache-v2', 'No license',
    ]
  },
  {
    type: 'input',
    message: "What is your github username?",
    name: 'github',
  },
  // what is project title


  // license

  // github 


  // description, installation instructions, usage information, contribution guidelines, and test instructions
  // email
  // github
]).then((ans) => {

  // once asked
  console.log(ans);
  const markdown = generateMarkdown(ans);

  // generate a readme file based on the responses
  // in the output folder
  const outputPath = path.join(__dirname, 'output', 'generated.md');

  fs.writeFile(outputPath, markdown, 'utf-8')
    .then(() => {
      console.log('generated!')
    });

})




