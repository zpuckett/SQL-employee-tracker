//server
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require("console.table");

const connection = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: 3001,
    user: "root",
    password: "Ni7cbz$$",
    database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log
    start();
});

function start() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update employee role",
          "Exit"
        ],
    })
    .then(answers => {
        console.log(answers.choice);
        switch (answers.choice) {
            case "View all departments":
                viewDepartments()
                break;
            
            case "View all roles":
                viewRoles()
                break;

            case "View all employees":
                viewEmployees()
                break;

            case "Add a department":
                addDepartment()
                break;

            case "Add a role":
                addRole()
                break;

            case "Add and employee":
                addEmployee()
                break;

            case "Update employee role":
                updateRole()
                break;
        }
    })
}

function viewDepartments() {
    connection
}