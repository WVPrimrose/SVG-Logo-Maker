const inquirer = require ('inquirer')

inquirer
    .prompt([])
    {
        name: 'text'
        type: 'input'
        message: 'Enter text up to three characters'
    }
    {
        name: 'text-color'
        type: 'list'
        message: 'Select one of the following text colors:'
        choices: 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'black', 'white', 'gray', 'brown'
    }
    {
        name: 'shape'
        type: 'list'
        message: 'Select one of the following shapes:'
        choices: 'triangle', 'circle', 'square'
    }
    {
        name: 'text-color'
        type: 'list'
        message: 'Select one of the following text colors:'
        choices: 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'black', 'white', 'gray', 'brown'
    }