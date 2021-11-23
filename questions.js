const inquirer = require('inquirer');

const userQuestions = [{
    name: 'username',
    type: 'input',
    message: "Enter team manager's name"
},
{
    name: 'employeeId',
    type: 'input',
    message: "Enter team manager's name"
},
{
    name: 'email',
    type: 'input',
    message: "Enter team manager's name"
},
{
    name: 'officeNumber',
    type: 'input',
    message: "Enter team manager's name"
},
{
    name: 'position',
    type: 'list',
    message: "Enter team manager's name",
    choices: ['Engineer', 'Intern', 'Done']
}
]
const manager = new manager (data.name)
function init() {
    inquirer.prompt(userQuestions).then(data => {
        console.log(data);
        const results = generateMarkdown(data)
        console.log(results)
        writeToFile('README.md', results)
    })

}