const { connect } = require("../db/connection")


async function addDepartment(name){

  const db = await connect();

  await db.query('INSERT INTO `employee_cms_demo`.`departments` (`name`) VALUES (?)', name);
}


async function getDepartments(){

  const db = await connect();

  const [departments] = await db.query('SELECT * FROM departments');
  
  return departments;

}


module.exports = {

  addDepartment,
  getDepartments,
}