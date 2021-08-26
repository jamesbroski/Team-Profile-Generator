const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

function init() {
  startHTML();
  addEmployee();
}
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
      addHTML(newTeamMember);
      then(function () {
        if (moreTeamMembers === "Yes") {
          addEmployee();
        } else {
          finishHTML();
        }
      });
    });
}

function startHTML() {
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
  
      <title>Team Profile Generator</title>
    </head>
    <body>
      <div class="container">
        <div class="row">`;
  fs.writeFile("./dist/index.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("start");
}

function addHTML(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let data = "";
    if (role === "Manager") {
      const officeNum = member.getOfficeNumber();
      data = `<divclass="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">Office Number: ${officeNum}</li>
            </ul>
          </div>
        </div>`;
    }
    console.log("adding new team member");
    fs.appendFile("./dist.index.html", data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function finishHTML() {
  const html = `</div>
  </div>
</body>
</html>`;
  fs.appendFile("./dist/index.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("end");
}

init();
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
