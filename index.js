const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team member's name?",
        name: "employeeName",
      },
      {
        type: "input",
        message: "What is the team member's ID?",
        name: "employeeID",
      },
      {
        type: "input",
        message: "What is the team member's email?",
        name: "employeeEmail",
      },
      {
        type: "list",
        message: "What is the team member's role?",
        name: "employeeRole",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(function ({ name, id, email, role }) {
      let establishedRole = "";
      if (role === "Manager") {
        establishedRole = "Office Number";
      } else if (role === "Engineer") {
        establishedRole = "Github Username";
      } else if (role === "Intern") {
        establishedRole = "School Attended";
      }
      inquirer.prompt([
        {
          type: "input",
          message: `Enter team member's ${establishedRole}`,
          name: "establishedRole",
        },
        {
          type: "list",
          message: "Would you like to add any more team members?",
          name: "moreTeamMembers",
          choices: ["Yes", "No"],
        },
      ]);
    })
    .then(function ({ establishedRole, moreTeamMembers }) {
      let newTeamMember;
      if (role === "Manager") {
        newTeamMember = new manager(name, id, email, establishedRole);
      } else if (role === "Engineer") {
        newTeamMember = new engineer(name, id, email, establishedRole);
      } else {
        newTeamMember = new intern(name, id, email, establishedRole);
      }
      employees.push(newTeamMember);
      //need some sort of html append
      then(function () {
        if (moreTeamMembers === "Yes") {
          addEmployee();
        } else {
          //need to append html here
        }
      });
    });
}
// const questions = []
//   {
//     type: "input",
//     message: "What is the team Manager's name?",
//     name: "managerName",
//   },
//   {
//     type: "input",
//     message: "What is the team Manager's ID?",
//     name: "managerID",
//   },
//   {
//     type: "input",
//     message: "What is the team Manager's Email?",
//     name: "managerEmail",
//   },
//   {
//     type: "input",
//     message: "What is the team Manager's Office Number?",
//     name: "managerOfficeNumber",
//   },
//   {
//     type: "list",
//     message: "What type of team member would you like to add?",
//     name: "managerOfficeNumber",
//     choices: ["Engineer", "Intern", "Don't want to add anymore team members"],
//   },
// ];

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) => {
//     err ? console.log(err) : console.log("File Success");
//   });
// }

// function init() {
//   inquirer.prompt(questions).then((data) => {
//     const newData = employees(data);
//     const newData = engineer(data);
//     const newData = intern(data);
//     const newData = manager(data);
//     writeToFile("index.html", newData);
//   });
// }

// init();
