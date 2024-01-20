const inquirer = require("./packages/node_modules/inquirer");
const fs = require("fs");
//import inquirer from "inquirer";
//Title
//Description
//Table of Contents
//Installation
//Usage
//License
//Contributing
//Tests
//Questions - github username github link + email + how to reach me

//License Badge - License Explanation

inquirer.prompt([
    {
        name: "title",
        type: "input",
        message: "Project Title?",
    },
    {
        name: "description",
        type: "input",
        message: "Project Description?",
    },
    {
        name: "installation",
        type: "input",
        message: "Install Instructions?",
    },
    {
        name: "usage",
        type: "input",
        message: "Usage Instructions?",
    },
    {
        name: "contributions",
        type: "input",
        message: "Contributors?",
    },
    {
        name: "test",
        type: "input",
        message: "Test Instructions?",
    },
    {
        name: "license",
        type: "list",
        choices: ["MIT", "GNU GPL 3.0", "Apache 2.0", "BSD-2", "ISC"],
        message: "Select License Type",
    },
    {
        name: "username",
        type: "input",
        message: "Github & Username",
    },
    {
        name: "email",
        type: "input",
        message: "Enter Email",
    },
    {
        name: "contact",
        type: "list",
        choices: ["Github", "Email"],
        message: "Best Contact Method?",
    }
]).then((data) => {
    let { title, description, installation, usage, contributions, test, license, username, email, contact } = data;

    let linkTitle = "[Title](#readme-generator)";
    let linkDesc = "[Description](#description)";
    let linkInstall = "[Install](#install)";
    let linkUsage = "[Usage](#usage)";
    let linkLicense = "[License](#license)";
    let linkContribute = "[Contributors](#contributors)";
    let linkQuestion = "[Questions - Contact Me](#questions)";

    // Badge links were found here => https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
    let apacheLicenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    let MITLicenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    let GNULicenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    let BSDLicenseBadge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    let ISCLicenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    let build = "";
    build += `# ${title}\n\n\n`;
    build += `# Description\n\n${description}\n\n\n`;
    build += `# Table of Contents\n\n`;
    build += `| ${linkTitle} | | ${linkDesc} |
              | ${linkInstall} | | ${linkUsage} |
              | ${linkContribute} | | ${linkLicense} |
              | ${linkQuestion} |\n\n\n`
    build += `# Install\n${installation}\n\n\n`;
    build += `# Usage\n${usage}\n\n\n`;
    build += `# Contributors\n${contributions}\n\n\n`;
    build += `# Test\n${test}\n\n\n`;

    if(license === "MIT") {
        console.log("MIT License");
        build += `# License \n${MITLicenseBadge} ${license}\n\n\n`;
    } else if(license === "GNU GPL 3.0") {
        build += `# License \n${GNULicenseBadge} ${license}\n\n\n`;
    } else if(license === "Apache 2.0") {
        build += `# License \n${apacheLicenseBadge} ${license}\n\n\n`;
    } else if(license === "BSD-2") {
        build += `# License \n${BSDLicenseBadge} ${license}\n\n\n`;
    } else {
        build += `# License \n${ISCLicenseBadge} ${license}\n\n\n`;
    }
    
    build += `# Questions\n`;
    build += `Github: ${username}\n\n`
    build += `Email: ${email}\n\n`;
    build += `Best Method: ${contact}`;

    fs.writeFile("README.md", build, (error) => 
        error ? console.error(error) : console.log("Saved Commit to ReadMe") 
    );
});

//https://img.shields.io/badge/License-MIT-yellow.svg