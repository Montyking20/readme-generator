
const generateMarkdown = ({ projectName, description, techUsed, installation, usage, contribution, tests, license, ghName, email, installPicDir, qProtocol, ghRepo}) =>
`

# ${projectName}



![License](https://img.shields.io/badge/License-${license}-blue.svg)


## <a href='#readme-badges'><img id='usage' src='https://i.imgur.com/mIa9BIm.png' style='height: 40px'></a>
* [Description](#description)
* [Technolgies Used](#technolgies-used)
* [Installation Instructions](#installation-instructions)
* [Usage Info](#usage-info)
* [Contribution Guide](#contribution-guide)
* [Instructions for testing](#instructions-for-testing)
* [Questions](#questions)
* [Screenshots](#screenshots) 

## <a id='description' href='#readme-badges'><img id='usage' src='https://i.imgur.com/LJ1S6wB.png' style='height: 40px'></a>
${description}

## <a id='technolgies-used' href='#readme-badges'><img id='usage' src='https://i.imgur.com/ykBU02c.png' style='height: 40px'></a>
${techUsed}

## <a id='installation-instructions' href='#readme-badges'><img id='usage' src='https://i.imgur.com/ucpcjWg.png' style='height: 40px'></a>
${installation}

## <a id='usage-info' href='#readme-badges'><img id='usage' src='https://i.imgur.com/erC9rgJ.png' style='height: 40px'></a>
${usage}

## <a id='contribution-guide' href='#readme-badges'><img id='usage' src='https://i.imgur.com/ZtAN77x.png' style='height: 35px'></a>
${contribution}

## <a id='instructions-for-testing'  href='#readme-badges'><img id='usage' src='https://i.imgur.com/7jEx40O.png' style='height: 40px'></a>
${tests}

## <a id='screenshots' href='#readme-badges'><img id='usage' src='https://i.imgur.com/WaoO6zA.png' style='height: 40px'></a>
Mockup<br>
<a id='screenshots' href='#readme-badges'><img id='usage' src='https://i.imgur.com/${installPicDir}.png' style='height: 400px'></a>

## <a id='questions' href='#readme-badges'><img id='usage' src='https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/menu-categories/questions-alt.png?raw=true' style='height: 40px'></a>
${qProtocol} or
If you have questions, you can either open a issue in my Github repository <br>
GitHub: <https://github.com/${ghName}> <br>
<br>
Or you can send me an email directly <br>
Email: <${email}>
[${projectName}](${ghRepo})
`;

module.exports = generateMarkdown;
