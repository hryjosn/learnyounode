const fs = require('fs');
let buffer = fs.readFileSync(process.argv[2]);
const count = buffer.toString().split('\n').length - 1;
console.log(count);