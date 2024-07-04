const inquirer = require('inquirer')
const Shape = require('./lib/logo')

inquirer
    .prompt([
        {
            name: 'text',
            type: 'input',
            message: 'Enter text up to three characters'
        },
        {
            name: 'textColor',
            type: 'list',
            message: 'Select one of the following text colors:',
            choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'black', 'white', 'gray', 'brown']
        },
        {
            name: 'shape',
            type: 'list',
            message: 'Select one of the following shapes:',
            choices: ['triangle', 'circle', 'square']
        },
        {
            name: 'shapeColor',
            type: 'list',
            message: 'Select one of the following shape colors:',
            choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'black', 'white', 'gray', 'brown']
        },

    ])
    .then(({text, textColor, shape, shapeColor})=>{

    })
