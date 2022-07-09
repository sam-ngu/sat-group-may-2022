

function generatelicenseBadge(license){

  const licenseName = encodeURIComponent(license.replace('-', ' '))

  return `![${license}-licensed](https://img.shields.io/badge/license-${licenseName}-red)`;
}


function generateMarkdown({ 
  title,
  license,
  github
}) {
  
  return `

# ${title}

${generatelicenseBadge(license)}

## Desc
blah blah


## Contact

Visit my github profile here: [${github}](https://github.com/${github})


`

}

module.exports = generateMarkdown;
