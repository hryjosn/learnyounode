const fs = require('fs');
const path =process.argv[2] 
const fileContent = fs.readFileSync(path);

console.log(fileContent.toString().split('\n').length-1)

