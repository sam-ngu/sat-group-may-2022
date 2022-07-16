const fs = require('fs');
const path = require('path');

const cardTemplatePath = path.join(__dirname, 'templates', 'card.html');
const mainTemplatePath = path.join(__dirname, 'templates', 'main.html');



function createCard(employee){

  // read the card.html template
  const cardTemplate = fs.readFileSync(cardTemplatePath, 'utf-8');

  // replace the placeholders with the actual data
  let replaced = cardTemplate.replace('{{name}}', employee.getName())
    .replace('{{id}}', employee.getId())
    .replace('{{role}}', employee.getRole())
    .replace('{{email}}', employee.getEmail());

  
  if(employee.getRole() === 'Manager'){
    replaced = replaced.replace('{{attr_key}}', 'Office Number')
      .replace('{{attr_value}}', employee.getOfficeNumber())
  }

  if (employee.getRole() === 'Engineer') {
    replaced = replaced.replace('{{attr_key}}', 'Github')
      .replace('{{attr_value}}', employee.getGithub())
  }
  if (employee.getRole() === 'Intern') {
    replaced = replaced.replace('{{attr_key}}', 'School')
      .replace('{{attr_value}}', employee.getSchool())
  }

  return replaced;

}


function generateHtml(employees){


  const mainTemplate = fs.readFileSync(mainTemplatePath, 'utf-8');
  // loop thru each employee
  // generate a card for each employee
  const cards = employees.map(createCard).join('')


  // once done
  // join the cards into 1 massive string
  // replace the {{body}} with this card string
  return mainTemplate.replace('{{body}}', cards);




}


module.exports = generateHtml;








