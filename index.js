const inquirer = require("./packages/node_modules/inquirer");
const fs = require("fs");

//Copied from License in repository :)
let MITdescription = `
MIT License

Copyright (c) 2024 Rbgibbs13

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`

//Copied from Wikipedia
let ISCdescription = `
ISC License

Copyright 2024 Garrett Gibbs

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`

//Taken from Wikipedia https://en.wikipedia.org/wiki/Apache_License && https://www.apache.org/legal/src-headers.html#notice
let Apachedescription = `
The Apache License is a free software license. 
The user is granted a patent license from each contributor to "make, have made, use, offer to sell, sell, import or otherwise transfer the work.

Apache ReadMe Generator
Copyright 2024 The Apache Software Foundation

This product includes software developed at
The Apache Software Foundation (http://www.apache.org/).`

//taken from Wikipedia https://en.wikipedia.org/wiki/GNU_General_Public_License
let GNUdescription = `
GNU GPL v3.0
The GNU General Public License is a collection of free software licenses that guarantee users the ability to run, study, share, or modify the software.`

let BSDdescription = `
BSD License 2.0 Generic
Copyright 2024 Garrett Gibbs

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
   2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
   3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;

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
    build += `# Installation\n${installation}\n\n\n`;
    build += `# Usage\n${usage}\n\n\n`;
    build += `# Contributors\n${contributions}\n\n\n`;
    build += `# Tests\n${test}\n\n\n`;

    if(license === "MIT") {
        console.log("MIT License");
        build += `# License \n${MITLicenseBadge} ${license}\n\n${MITdescription}\n`;
    } else if(license === "GNU GPL 3.0") {
        build += `# License \n${GNULicenseBadge} ${license}\n\n${GNUdescription}\n`;
    } else if(license === "Apache 2.0") {
        build += `# License \n${apacheLicenseBadge} ${license}\n\n${Apachedescription}\n`;
    } else if(license === "BSD-2") {
        build += `# License \n${BSDLicenseBadge} ${license}\n\n${BSDdescription}\n`;
    } else {
        build += `# License \n${ISCLicenseBadge} ${license}\n\n${ISCdescription}\n`;
    }
    
    build += `# Questions\n`;
    build += `Github: ${username}\n\n`
    build += `Email: ${email}\n\n`;
    build += `Best Contact Method: ${contact}`;

    fs.writeFile("README.md", build, (error) => 
        error ? console.error(error) : console.log("Saved Commit to ReadMe") 
    );
});

//https://img.shields.io/badge/License-MIT-yellow.svg