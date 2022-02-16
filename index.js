const fs = require('fs');
const buf = fs.readFileSync('./hello-world.js')
console.log(buf)
