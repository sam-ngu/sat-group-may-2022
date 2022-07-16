const Employee = require("./Employee");

class Engineer extends Employee{

  constructor(id, email, name, github){

    super(id, email, name);

    this.github = github;

  }

  getGithub(){
    return this.github;
  }

  getRole(){
    return 'Engineer';
  }


}


module.exports = Engineer;