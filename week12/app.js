const inquirer = require('inquirer');
const { getDepartments, addDepartment } = require('./operations/department');




function main(){
  return inquirer.prompt([
    {
      message: "What you want?",
      type: 'list',
      name: 'operation',
      choices: [
        'view all departments',
        'add department',
        'view all roles',
        'update employee roles',   // once user selected this, should see a list of employee name to choose from, select the new role
        'exit',
      ]
    },
    {
      message: "What is the department name?",
      type: 'input',
      name: "department_name",
      when: (ans) => ans.operation === 'add department',
    }
  ]).then(async (ans) => {
  
    
    switch (ans.operation){
  
      case "add department":
        const department = await addDepartment(ans.department_name);
        break;

      case "view all departments":
        const departments = await getDepartments();
        console.table(departments);
        break;
  
      case "view all roles":
        break;

      
  
  
      case "exit":
        process.exit(0);
        break;
        
    }
  
    await main();
  
  })

}

main();

//  create a CLI to manage employees

// view all departments, 

// view all roles, 
// view all employees, 
// add a department, 

// add a role, add an employee, and update an employee role




