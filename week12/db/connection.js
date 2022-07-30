try{
  require('dotenv').config();
}catch(err){
  console.log(err);
}



const mysql = require('mysql2/promise');



function connect(){


  return mysql.createConnection({
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: 'employee_cms_demo',
  })


}

module.exports = {connect};