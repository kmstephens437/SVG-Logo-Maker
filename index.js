const inquirer = require ("inquirer");
const fs = require ("fs")

const questions = () => inquirer.prompt ([
    {
        name: 'text',
        type: 'input',
        message:'Please enter 3 letters for your logo.'
    }
    {
        name: 'shape',
        type: 'list',
        message: 'Please select a shape for your logo.' ,
        choices: ['Circle', 'Square','Triangle']
    }
])

questions()
.then((answers) => {
    
})