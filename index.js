const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHtml = require('./src/generateHtml')
const fs = require('fs')


const employeeArr = []

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
function createEmployee() {
    inquirer.prompt(userQuestions).then(data => {
        const manager = new Manager(data.username, data.employeeId, data.email, data.officeNumber)
        console.log(data);
        employeeArr.push(manager)
        if (data.position === 'Engineer') {
            createEngineer();
        } else if (data.position === 'Intern') {
            createIntern();
        } else {
            writeHtml();
        }
        // const results = generateMarkdown(data)
        // console.log(results)
        // writeToFile('README.md', results)
    })

}

const engineerQuestions = [{
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
    choices: ['Manager', 'Engineer', 'Intern', 'Done']
}
]



function createEngineer() {
    inquirer.prompt(engineerQuestions).then(data => {
        const engineer = new Engineer(data.username, data.employeeId, data.email, data.officeNumber)
        console.log(data);
        employeeArr.push(engineer)
        if (data.position === 'Engineer') {
            createEngineer();
        } else if (data.position === 'Intern') {
            createIntern();
        } else {
            writeHtml();
        }
        // const results = generateMarkdown(data)
        // console.log(results)
        // writeToFile('README.md', results)
    })

}

const internQuestions = [{
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


function createIntern() {
    inquirer.prompt(internQuestions).then(data => {
        const intern = new Intern(data.username, data.employeeId, data.email, data.officeNumber)
        console.log(data);
        employeeArr.push(intern)
        if (data.position === 'Engineer') {
            createEngineer();
        } else if (data.position === 'Intern') {
            createIntern();
        } else {
            writeHtml();
        }
        // const results = generateMarkdown(data)
        // console.log(results)john

    })

}

// make questions for intern, and manager

function writeHtml() {
// convert employee array to html string
     const htmlString = generateHtml(employeeArr)
     // html string to write file
     fs.writeFile('./dist/employee.html', htmlString, function(err) {
        if(err) throw err
        console.log('File Written');
     })
}

createEmployee();