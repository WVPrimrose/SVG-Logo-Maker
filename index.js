const inquirer = require('inquirer');
const Shape = require('./lib/logo');
const { writeFile } = require('fs/promises');
const fs = require('fs')

const createSVG = [
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

    ]
    
    function writeToFile(filename, data) {
        return writeFile(filename, data)
    }

    function init() {
        inquirer.prompt(createSVG)
        .then(userData => {
            const shape1 = new Shape (userData.text, userData.textColor, userData.shape, userData.shapeColor)
            const file = writeFile('./logo.svg', shape1.file())
        })
    }
init()