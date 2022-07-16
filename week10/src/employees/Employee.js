class Employee {


  constructor(id, email, name){
    this.id = id;
    this.email = email;
    this.name = name;
  }


  getName(){
    return this.name;
  }

  getId(){
    return this.id;
  }

  getEmail(){
    return this.email;
  }

  getRole(){
    return 'Employee';
  }


}

module.exports = Employee;