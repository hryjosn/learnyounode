const fs = require('fs');
const path = process.argv[2] 
const content = fs.readdirSync(path)
console.log(content.toString().split('\n').length - 1)
