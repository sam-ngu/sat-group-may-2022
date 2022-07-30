const { seedDepartments } = require("./seed-departments");





async function main(){

  await seedDepartments();
}



main();

