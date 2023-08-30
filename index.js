const inquirer = require ("inquirer");
const fs = require ("fs")

const questions = () => inquirer.prompt ([
    {
        name: 'text',
        type: 'input',
        message:'Please enter 3 letters for your logo.'
    },
    {
        name: 'textColor',
        type: 'input',
        message:'Please enter a color for your text.'
    },
    {
        name: 'shape',
        type: 'list',
        message: 'Please select a shape for your logo.' ,
        choices: ['Circle', 'Square','Triangle']
    },
    {
        name: 'shapeColor',
        type: 'input',
        message: 'Please enter a color for your shape.'
    }


])

questions()
    .then((answers) => {
        const generated = generateSvg(answers);
        fs.writeFileSync ('logo.svg', generated)
    })
    .then(() => console.log('Success! Logo created'))
    .catch(err => console.log(err));