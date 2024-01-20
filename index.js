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
        message: "Contribution Guidelines?",
    },
    {
        name: "test",
        type: "input",
        message: "Test Instructions",
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
        message: "Github Username",
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

    let { title, description, installation, usage, contributions, test, license, username, email } = data;

    let linkTitle = "[Go to Title Section]{#title-heading}";
    let linkDesc = "[Go to Desctiption Section]{#description-heading}";
    let linkInstall = "[Go to Install Section]{#install-heading}";
    let linkUsage = "[Go to Usage Section]{#usage-heading}";
    let linkLicense = "[Go to License Section]{#license-heading}";
    let linkContribute = "[Go to Contribution Section]{#contribution-heading}";
    let linkQuestion = "[Go to Question Section]{#question-heading}";

    let build = "";
    build += `${mTitle}`;
    build += `Description\n${mDesc}\n\n`;
    build += `Table of Contents\n`;
    build += `${linkTitle} ${linkDesc} ${linkInstall} ${linkUsage} ${linkLicense} ${linkContribute} ${linkQuestion}\n`;
    build += `Install\n${mInstall}\n`;
    build += `Usage\n${mUsage}\n`;
    build += `Contribution\n${mContribute}\n`;
    build += `Test\n${mTest}\n`;
    build += `License\n${mLicense}\n`;
    build += `Questions\n${mUsername}\n${mEmail}`;

    fs.writeFile("README.md", build, (error) => 
        error ? console.error(error) : console.log("Saved Commit to ReadMe") 
    );
});