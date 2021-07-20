const fs = require('fs');
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
module.exports=generatePage