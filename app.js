// const animalArray =['dog','cat','pig'];
// animalArray.push('cow');

const { fstat } = require("fs");

// const personObj = {
//     name: 'Patrena',
//     age: 99
// n};
// personObj.age =100;
// personObj.occupation = 'Developer'; 
// console.log(personObj);
// console.log(animalArray);

// const profileDataArgs = process.argv.slice(2);

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// const generatePage = () => 'Name: Patrena A. Smith, Github: Patren94';
// console.log(generatePage());
//  generate
// const generatePage = (userName, githubName) =>'Name: ${userName}, Github: ${githubName}';
// console.log(generatePage('Patrena A. Smith','Patrena94'));

const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
console.log(process.argv)
const generatePage = (userName, githubName) => { 
return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
</head>
<body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
    
// </body>
// <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</html>
`;
};
fs.writeFile('index.html', generatePage("Patrena Smith", "Patrena94"), err => {
    if(err) throw err;
    console.log('portfolio complete! Check out index.html to see the output!');
});
