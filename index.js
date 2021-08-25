const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

const questions = [
  {
    type: "input",
    message: "What is the team Manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the team Manager's ID?",
    name: "managerID",
  },
  {
    type: "input",
    message: "What is the team Manager's Email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the team Manager's Office Number?",
    name: "managerOfficeNumber",
  },
  {
    type: "list",
    message: "What type of team member would you like to add?",
    name: "managerOfficeNumber",
    choices: ["Engineer", "Intern", "Don't want to add anymore team members"],
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("File Success");
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    const newData = employees(data);
    const newData = engineer(data);
    const newData = intern(data);
    const newData = manager(data);
    writeToFile("index.html", newData);
  });
}

init();
