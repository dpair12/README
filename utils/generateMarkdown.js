//Function to Render License Badges
function renderLicenseBadge(data) {
    //Render Apache Badge
    if (data.license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    //Render GNU Badge
    } else if (data.license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    //Render MIT Badge
    } else if (data.license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    //Render BSD 2 Badge
    } else if (data.license === 'BSD 2') {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`;
    //Render BSD 3 Badge
    } else if (data.license === 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
    //Render Boost Badge
    } else if (data.license === 'Boost') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
    //Render Creative Commons Zero Badge
    } else if (data.license === 'Creative Commons Zero') {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`;
    //Render Eclispe Public License Badge
    } else if (data.license === 'Eclipse Public License') {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`; 
    //Render GNU Affero Public License Badge
    } else if (data.license === 'GNU Affero Public License') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
    //Render GNU General Public License v2 Badge
    } else if (data.license === 'GNU General Public License v2') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`;
    //Render Mozilla Public License Badge
    } else if (data.license === 'Mozilla Public License') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    //Render The Unlicense Badge
    } else if (data.license === 'The Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
    //Render Nothing If None of the Above Matches User Input
    } else {
    return ``;
    }
    }
    
//Function to Render Link to License
    function renderLicenseLink(data) {
    //Render Apache Link
    if (data.license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`;
    //Render GNU Link
    } else if (data.license === 'GNU') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
    //Render MIT Link
    } else if (data.license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`;
    //Render BSD 2 Link
    } else if (data.license === 'BSD 2') {
    return `(https://opensource.org/licenses/BSD-2-Clause)`;
    //Render BSD 3 Link
    } else if (data.license === 'BSD 3') {
    return `(https://opensource.org/licenses/BSD-3-Clause)`;
    //Render Boost Link
    } else if (data.license === 'Boost') {
    return `(https://www.boost.org/LICENSE_1_0.txt)`;
    //Render Creative Commons Zero Link
    } else if (data.license === 'Creative Commons Zero') {
    return `(http://creativecommons.org/publicdomain/zero/1.0/)`;
    //Render Eclipse Public License Link
    } else if (data.license === 'Eclipse Public License') {
    return `(https://opensource.org/licenses/EPL-1.0)`; 
    //Render GNU Affero Public License Link
    } else if (data.license === 'GNU Affero Public License') {
    return `(https://www.gnu.org/licenses/agpl-3.0)`;
    //Render GNU General Public License Link
    } else if (data.license === 'GNU General Public License v2') {
    return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    //Render Mozilla Public License Link
    } else if (data.license === 'Mozilla Public License') {
    return `(https://opensource.org/licenses/MPL-2.0)`;
    //Render The Unlicense Link
    } else if (data.license === 'The Unlicense') {
    return `(https://opensource.org/licenses/OFL-1.1)`;
    //Render Nothing If None of the Above Values Matches User Input
    } else {
    return ``;
    }
    }
    
  //Function to Render License Section Using renderLicenseBadge and renderLicenseLink functions
    function renderLicenseSection(data) {
    //If User Enters in None then Display ## No License Used
    if (data.license === 'None') {
    return `## No License Used`;
    //Otherwise, Display the Following
    } else {
      return `## ${data.license}-License ${renderLicenseBadge(data)} \n\n` +
      `This application uses the ${data.license} license. To learn more about ${data.license}, please click here: ${renderLicenseLink(data)}`;
    }
    }
//Function to render table of Contents
    function renderTableofContents(data) {
      let tc = data.content.split(",");
      let tableOfContents = '';
      for (var i = 0; i < tc.length; i++) {
      tableOfContents += `[${tc[i]}](#${tc[i]})\n`
      }
      return tableOfContents;
    }
    
//Function to generateMarkdown for ReadME 
    function generateMarkdown(data) {
      return `## ${data.name}\n\n` +
        `## Project Description\n\n` +
        `${data.description}\n\n` +
        `## Table of Contents\n\n` +
        `${renderTableofContents(data)}\n\n` +
        `## Application-Demo\n\n` +
        `${data.demo}\n\n` +
        `## Installation\n\n` +
        `${data.install}\n\n` +
        `## Usage\n\n` +
        `${data.usage}\n\n` +
        `${renderLicenseSection(data)}\n\n` + 
        `## Contributing\n\n` +
        `${data.contributing}\n\n` +
        `## Tests\n\n` +
        `${data.tests}\n\n` +
        `## Questions\n\n` +
        `Link to Github Profile: ${data.questions}\n\n`;
    }
    //Defines module.exports object
    module.exports = generateMarkdown;