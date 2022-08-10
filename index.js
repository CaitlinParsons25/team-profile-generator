const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?'       
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?' 
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?'
        },
        
    ])
    .then((answers) => {
        let result = generateHTML(answers);
        writeToFile('./dist/index.html', result)
      })
      .catch((error) => {
        console.log(error)
      })
};

function writeToFile(fileName, data) {
    try {
      fs.writeFileSync(fileName, data);
    } catch (err) {
      console.error(err);
    }
  };

questions();