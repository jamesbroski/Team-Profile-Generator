const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/generateHTML");

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team Manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the team Manager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team Manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the team Manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const newManager = new Manager(name, id, email, officeNumber);

      employees.push(newManager);
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please choose your employee's role",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's email?",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter Engineer's Github username",
        name: "github",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        message: "Please enter Intern's school attended",
        name: "school",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        message: "Would you like to add any more team members?",
        name: "confirmNewEmployee",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmNewEmployee } =
        employeeData;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }
      employees.push(employee);

      if (confirmNewEmployee) {
        return addEmployee(employee);
      } else {
        return employee;
      }
    });
}

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Success! Yay team!");
    }
  });
};

addManager()
  .then(addEmployee)
  .then((employees) => {
    return generateHTML(employees);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
