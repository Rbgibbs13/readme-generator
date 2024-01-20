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
        message: "Contributers?",
    },
    {
        name: "test",
        type: "input",
        message: "Test Instructions?",
    },
    {
        name: "license",
        type: "list",
        choices: ["MIT", "GNU 3.0", "Apache 2.0", "BSD-2"],
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
    let mTitle = data.title;
    let mDesc = data.description;
    let mInstall = data.installation;
    let mUsage = data.usage;
    let mContribute = data.contributions;
    let mTest = data.test;
    let mLicense = data.license;
    let mUsername = data.username;
    let mEmail = data.email;

    let { title, description, installation, usage, contributions, test, license, username, email, contact } = data;

    let linkTitle = "[Go to ReadMe Generator section](#readme-generator)";
    let linkDesc = "[Go to Desctiption section](#description)";
    let linkInstall = "[Go to Install section](#install)";
    let linkUsage = "[Go to Usage section](#usage)";
    let linkLicense = "[Go to License section](#license)";
    let linkContribute = "[Go to Contributers Section](#contributers)";
    let linkQuestion = "[Go to Question Section](#question)";

    let build = "";
    build += `#${title}\n\n`;
    build += `#Description\n\n${description}\n\n`;
    build += `#Table of Contents\n\n`;
    build += `${linkTitle} ${linkDesc} ${linkInstall} ${linkUsage} ${linkLicense} ${linkContribute} ${linkQuestion}\n\n`;
    build += `\n#Install\n${mInstall}\n\n`;
    build += `#Usage\n${mUsage}\n\n`;
    build += `#Contributers\n${mContribute}\n\n`;
    build += `#Test\n${mTest}\n\n`;
    build += `#License:\n${mLicense}\n\n`;
    build += `#Questions - Contact Me\n`;
    build += `Github: ${username}\n`
    build += `Email: ${email}\n`;
    build += `Best Method: ${contact}`;

    fs.writeFile("README.md", build, (error) => 
        error ? console.error(error) : console.log("Saved Commit to ReadMe") 
    );
});